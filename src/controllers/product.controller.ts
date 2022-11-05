import { Request, Response } from 'express';
import { IProductInput } from '../interfaces';
import * as productService from '../services/product.service';

export async function create(req: Request, res: Response) {
  const product = req.body as IProductInput;
  const { status, data } = await productService.create(product);
  res.status(status).json(data);
}

export async function getAll(_req: Request, res: Response) {
  const { status, data } = await productService.getAll();
  res.status(status).json(data);
}