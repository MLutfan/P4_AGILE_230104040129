// utils.ts
import { randomUUID } from 'node:crypto';
import pino from 'pino';
import pinoHttp from 'pino-http';
import { z } from 'zod';
import type { NextFunction, Request, Response } from 'express';

export const logger = pino({ level: 'info' });

export const httpLogger = pinoHttp({
  logger,
  customSuccessMessage: () => 'request completed',
});

export function correlationId(req: Request, res: Response, next: NextFunction) {
  const cid = (req.headers['x-correlation-id'] as string) || randomUUID();
  res.setHeader('x-correlation-id', cid);
  (req as any).cid = cid;
  next();
}

export function requireBearer(req: Request, res: Response, next: NextFunction) {
  const auth = req.headers.authorization;
  if (!auth?.startsWith('Bearer ') || auth.split(' ')[1] !== 'test123') {
    return res.status(401).json({ message: 'Unauthorized', code: 'UNAUTH' });
  }
  next();
}

export const CreateOrderSchema = z.object({
  productId: z.string().min(1),
  quantity: z.number().int().min(1),
});

export function validate<T>(schema: z.ZodSchema<T>) {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success)
      return res.status(400).json({ message: 'ValidationError', code: 'BAD_REQUEST' });
    (req as any).validated = result.data;
    next();
  };
}
