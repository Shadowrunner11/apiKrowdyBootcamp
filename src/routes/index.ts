import { Router } from 'restify-router';
import routerLinkedinInstance from './linkedin.scrapper.routes';

const miniapp = new Router();

miniapp.add('/linkedin', routerLinkedinInstance);

export default miniapp;
