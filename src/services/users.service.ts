import jwt from 'jsonwebtoken';
import { IUserInput } from '../interfaces';
import createUser from '../models/users.model';

export default async function create(user: IUserInput) {
  const data = await createUser(user);
  const { id, username, classe, level } = data;
  const payload = { id, username, classe, level };

  const token = jwt.sign(
    payload,
    process.env.JWT_SECRET as string,
    { algorithm: 'HS256', expiresIn: '1d' },
  );

  return { status: 201, data: token };
}