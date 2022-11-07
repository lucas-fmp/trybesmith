import { IOrders } from '../interfaces';
import connection from './connection';

export default async function getAll(): Promise<IOrders[]> {
  const query = `SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) as productsIds
    FROM Trybesmith.Orders as o
    INNER JOIN Trybesmith.Products as p
    ON o.id = p.orderId
    GROUP BY o.id`;

  const [data] = await connection.execute(query);

  return data as IOrders[];
}