'use strict';

const util = require('util');
const Q = require('@nmq/q/client');
const fs = require('fs');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const read = (file) => readFile(file);
const write = (file, buffer) => writeFile(file, buffer);
const convert = (data) => Buffer.from(data.toString().trim().toUpperCase());

const alterFile = (file) => {
  return read(file)
    .then(buffer => convert(buffer))
    .then(buffer => write(file, buffer))
    .then( () => Q.publish('files', 'save', file))
    .catch(error => Q.publish('files', 'error', error.message));
};

let file = process.argv.slice(2).shift();
alterFile(file);
