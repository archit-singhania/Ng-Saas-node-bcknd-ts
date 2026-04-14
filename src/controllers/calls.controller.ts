import { Request, Response, NextFunction } from 'express';
import * as callsService from '../services/calls.service';

export async function summary(_req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    res.json(await callsService.getSummary());
  } catch (err) { next(err); }
}

export async function recent(_req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    res.json(await callsService.getRecentCalls());
  } catch (err) { next(err); }
}

export async function list(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const page  = Math.max(1, parseInt((req.query.page  as string) || '1',  10));
    const limit = Math.max(1, parseInt((req.query.limit as string) || '15', 10));
    res.json(await callsService.getAllCalls(page, limit));
  } catch (err) { next(err); }
}
