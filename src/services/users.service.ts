import jwt from 'jsonwebtoken';
import { ILogin, IUserInput } from '../interfaces';
import * as usersModel from '../models/users.model';

export async function create(user: IUserInput) {
  const data = await usersModel.create(user);
  const { id, username, classe, level } = data;
  const payload = { id, username, classe, level };

  const token = jwt.sign(
    payload,
    process.env.JWT_SECRET as string,
    { algorithm: 'HS256', expiresIn: '1d' },
  );

  return { status: 201, data: token };
}

export async function login(data: ILogin) {
  const user = await usersModel.login(data);

  if (!user) {
    console.log(user);
    return { status: 401, message: 'Username or password invalid' };
  }

  const { id, username, classe, level } = user;
  const payload = { id, username, classe, level };
  const token = jwt.sign(
    payload,
    process.env.JWT_SECRET as string,
    { algorithm: 'HS256', expiresIn: '1d' },
  );

  return { status: 200, message: token };
}