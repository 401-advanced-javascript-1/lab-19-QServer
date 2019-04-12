# JS401 - Lab-19 Msg Queue Server
## Author: Cory Henderson
This lab creates a message server that monitors database events and also links a API server which will fire events to the Queue based on the get/post/put/delete operations

## Links and Resources
- [Github Repo](https://github.com/401-advanced-javascript-1/lab-19-QServer/tree/submission)
- [Travis](https://www.travis-ci.com/401-advanced-javascript-1/lab-1-QServer)

# Modules
- app.js: contains functionality for read/update/write files
- server.js: opens port and contains handler functions for socket events
- logger.js: contains socket event listeners which log save/error events

# Setup
- Run nodemon on PORT to start server
    - CLI: nodemon
- Connect logger.js to server
    - CLI: nodemon logger.js
- Read/write file
    - CLI: node app.js (file path to write)

## Tests
- Testing for expected route endpoints is performed using jest.
