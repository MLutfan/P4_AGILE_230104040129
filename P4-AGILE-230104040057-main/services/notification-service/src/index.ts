import express from 'express';
import rateLimit from 'express-rate-limit';
import { httpLogger, correlationId, requireBearer } from '../../../utils';

const app = express();
app.use(httpLogger);
app.use(correlationId);
app.use(requireBearer);
app.use(rateLimit({ windowMs: 60_000, max: 120 }));

app.get('/notifications', (req, res) => {
  const limit = Math.max(1, Math.min(100, Number(req.query.limit) || 10));
  const data = Array.from({ length: Math.min(1, limit) }).map((_, i) => ({
    id: `n${i + 1}`,
    type: 'ORDER_CREATED',
    message: 'Order created successfully',
    createdAt: new Date().toISOString(),
  }));
  res.json({ data, total: data.length });
});

export default app;
