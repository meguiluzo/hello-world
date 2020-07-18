import { Request, Response } from 'express';

export class HelloController {
  public index(_: Request, res: Response): void {
    res.json({
        message: "Hello World !"
    })
  }
}
