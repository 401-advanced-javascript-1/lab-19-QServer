# JS401 - Lab-19 Msg Queue Server
## Author: Cory Henderson
This lab creates a message server that monitors database events and also links a API server which will fire events to the Queue based on the get/post/put/delete operations.  It is composed of 3 individual servers: an API server, a Queue server, and a message/logger server which logs any events it is subscribed to.

## Links and Resources
- [Q-Server Github](https://github.com/401-advanced-javascript-1/lab-19-QServer/tree/submission)
- [Q-Server Heroku](https://github.com/401-advanced-javascript-1/lab-19-logger/tree/working)
- [API-Server Github](https://github.com/401-advanced-javascript-1/lab-19-api-server/tree/working2)
- [API-Server Heroku](https://github.com/401-advanced-javascript-1/lab-19-logger/tree/working)
- [Logger-Server Github](https://github.com/401-advanced-javascript-1/lab-19-logger/tree/working)
- [Logger-Server Heroku](https://github.com/401-advanced-javascript-1/lab-19-logger/tree/working)
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
