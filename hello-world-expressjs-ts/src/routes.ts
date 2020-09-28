import { Application, Router } from 'express';
import { PingController } from './controllers/ping.controller';
import { HomeController } from './controllers/home.controller';

const _routes: [string, Router][] = [
  ['/', HomeController],
  ['/ping', PingController],
];

export const routes = (app: Application): void => {
  _routes.forEach(route => {
    const [url, controller] = route;
    app.use(url, controller);
  });
};
