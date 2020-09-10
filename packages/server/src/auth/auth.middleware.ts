import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly service: AuthService) {}
  async use(req: Request, res: Response, next: Function) {
    try {
      res.locals.viewer = this.service.getViewer(req);
      next();
    } catch (error) {
      console.error(error);
      res.status(error.code);
      res.send({ error: error.name, error_description: error.message });
    }
  }
}
