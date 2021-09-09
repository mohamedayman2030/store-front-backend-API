import { Request, Response } from 'express';
import express from 'express';
import userRoutes from './handlers/user';
import productRoutes from './handlers/product';
import orderRoutes from './handlers/order';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
const app = express()
const address: string = "0.0.0.0:3000"

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', function (req: Request, res: Response) {
    res.send('Hello World!')
})

userRoutes(app);
productRoutes(app);
orderRoutes(app);



app.listen(3000, function () {
    console.log(`starting app on: ${address}`)
})

export default app;
