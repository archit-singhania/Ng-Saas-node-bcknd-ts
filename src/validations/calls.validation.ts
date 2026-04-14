import { Request, Response, NextFunction } from 'express';

export function validatePagination(req: Request, res: Response, next: NextFunction): void {
  const page  = parseInt((req.query.page  as string) || '1',  10);
  const limit = parseInt((req.query.limit as string) || '15', 10);
  if (isNaN(page)  || page  < 1) { res.status(400).json({ error: 'Invalid page parameter' });  return; }
  if (isNaN(limit) || limit < 1) { res.status(400).json({ error: 'Invalid limit parameter' }); return; }
  next();
}
