import express from 'express';
import productRouter from './routers/product.router';
import usersRouter from './routers/users.router';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', usersRouter);

export default app;
