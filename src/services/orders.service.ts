import getAllOrders from '../models/orders.model';

export default async function getAll() {
  const data = await getAllOrders();
  return { status: 200, data };
}