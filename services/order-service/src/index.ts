import express from 'express';
import rateLimit from 'express-rate-limit';
import { randomUUID } from 'node:crypto';
import {
  httpLogger,
  correlationId,
  requireBearer,
  validate,
  CreateOrderSchema
} from '../../../utils';

const app = express();
app.use(express.json());
app.use(httpLogger);
app.use(correlationId);
app.use(requireBearer);
app.use(rateLimit({ windowMs: 60_000, max: 60 }));

const orders: any[] = [];

app.post('/orders', validate(CreateOrderSchema), (req, res) => {
  const { productId, quantity } = (req as any).validated;
  const order = {
    id: randomUUID(),
    productId,
    quantity,
    createdAt: new Date().toISOString(),
  };
  orders.push(order);
  res.status(201).json(order);
});

export default app;
