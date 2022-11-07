import express from 'express';
import productRouter from './routers/product.router';
import usersRouter from './routers/users.router';
import ordersRouter from './routers/orders.router';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', usersRouter);
app.use('/orders', ordersRouter);

export default app;
