import 'dotenv/config';
import server from './services/server';
import os from 'os';
import cluster from 'cluster';

const { PORT }  = process.env;
const CPUsNumber = os.cpus().length;

if(cluster.isPrimary)
  console.log(CPUsNumber);

server.listen(PORT ?? 3000, ()=>{
  // eslint-disable-next-line no-console
  console.log('%s listening at %s', server.name, server.url);
});

