const jsonServer = require('json-server');
const cors = require('cors');

const port = 3333;

const server = jsonServer.create();
const db = jsonServer.router('server.json');
server.use(cors());

server.use('/api', db);
server.listen(port);
