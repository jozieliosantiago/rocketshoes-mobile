const jsonServer = require('json-server');

const port = 3333;

const server = jsonServer.create();
const db = jsonServer.router('server.json');

server.use('/api', db);
server.listen(port);
