import { Request, Response } from 'express';
import { ILogin, IUserInput } from '../interfaces';
import * as usersService from '../services/users.service';

export async function create(req: Request, res: Response) {
  const user = req.body as IUserInput;
  const { status, data } = await usersService.create(user);
  res.status(status).json({ token: data });
}

export async function login(req: Request, res: Response) {
  const user = req.body as ILogin;
  const { username, password } = user;

  if (!username) {
    return res.status(400).json({ message: '"username" is required' });
  }
  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }

  const { status, message } = await usersService.login(user);

  if (status === 401) {
    return res.status(status).json({ message });
  }

  return res.status(status).json({ token: message });
}
