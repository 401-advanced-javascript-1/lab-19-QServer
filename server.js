'use strict';

const Q = require('@nmq/q/server');
Q.start();

const files = new Q('files');
const db = new Q('database');

//Files event listeners
files.monitorEvent('save');
files.monitorEvent('error');

//DB event listeners
db.monitorEvent('get');
db.monitorEvent('put');
db.monitorEvent('post');
db.monitorEvent('delete');
db.monitorEvent('error');