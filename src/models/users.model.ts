import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { IUserInput, IUserId, ILogin } from '../interfaces';

export async function create(user: IUserInput): Promise<IUserId> {
  const { username, classe, level, password } = user;
  const query = `INSERT INTO Trybesmith.Users (username, classe, level, password)
  VALUES (?, ?, ?, ?)`;
  const values = [username, classe, level, password];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const data = { id, ...user };

  return data;
}

export async function login(data: ILogin): Promise<IUserId> {
  const { username, password } = data;

  const query = 'SELECT * FROM Trybesmith.Users WHERE username=? AND password=?';

  const [[row]] = await connection
    .execute<IUserId[] & RowDataPacket[]>(query, [username, password]);
    
  return row;
}