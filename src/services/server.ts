import morgan from 'morgan';
import restify from 'restify';
import miniapp from '../routes';

const server =  restify.createServer();

server.use(morgan('dev'));
server.use(restify.plugins.jsonBodyParser());

miniapp.applyRoutes(server);

export default server;
