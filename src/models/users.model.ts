import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IUserInput, IUserId } from '../interfaces';

export default async function create(user: IUserInput): Promise<IUserId> {
  const { username, classe, level, password } = user;
  const query = `INSERT INTO Trybesmith.Users (username, classe, level, password)
  VALUES (?, ?, ?, ?)`;
  const values = [username, classe, level, password];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const data = { id, ...user };

  return data;
}