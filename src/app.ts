import * as express from 'express';
import 'express-async-errors';
import productRouter from './routes/products';
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(productRouter);

export default app;
