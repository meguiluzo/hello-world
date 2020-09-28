import { NextFunction, Request, Response, Router } from 'express';
export const PingController: Router = Router();

PingController.get('/', async (_: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).send({ data: 'Pong!' });
  } catch (e) {
    next(e);
  }
});
