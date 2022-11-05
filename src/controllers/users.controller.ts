import { Request, Response } from 'express';
import { IUserInput } from '../interfaces';
import createUser from '../services/users.service';

export default async function create(req: Request, res: Response) {
  const user = req.body as IUserInput;
  const { status, data } = await createUser(user);
  res.status(status).json({ token: data });
}
