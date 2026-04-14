import { Request, Response, NextFunction } from 'express';

interface AppError extends Error {
  status?: number;
}

export default function errorHandler(
  err: AppError,
  _req: Request,
  res: Response,
  _next: NextFunction
): void {
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
}
