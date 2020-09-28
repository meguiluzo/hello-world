import { NextFunction, Request, Response, Router } from 'express';
export const HomeController: Router = Router();

HomeController.get('/', async (_: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).send({ data: 'Hello World!' });
  } catch (e) {
    next(e);
  }
});
