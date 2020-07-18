import express, { Request, Response } from 'express';
import { helloController } from '../controllers';

export const router = express.Router({
  strict: true,
});

router.get('/', helloController.index);
