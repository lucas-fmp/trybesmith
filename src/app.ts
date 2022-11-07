import express from 'express';
import productRouter from './routers/product.router';
import usersRouter from './routers/users.router';
import ordersRouter from './routers/orders.router';
import loginRouter from './routers/login.router';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', usersRouter);
app.use('/orders', ordersRouter);
app.use('/login', loginRouter);

export default app;
