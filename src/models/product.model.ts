import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IProductInput, IProductId, IProductOrderId } from '../interfaces';

export async function create(product: IProductInput): Promise<IProductId> {
  const { name, amount } = product;

  const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
  const values = [name, amount];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newProduct: IProductId = { id, ...product };
  return newProduct;
}

export async function getAll(): Promise<IProductOrderId[]> {
  const query = 'SELECT * FROM Trybesmith.Products';

  const [data] = await connection.execute(query);

  return data as IProductOrderId[];
}