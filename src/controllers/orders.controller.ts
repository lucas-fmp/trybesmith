import { Request, Response } from 'express';
import getAllOrders from '../services/orders.service';

export default async function getAll(_req: Request, res: Response) {
  const { status, data } = await getAllOrders();
  res.status(status).json(data);
}