import express from 'express';
import authRouter from  './src/auth/auth.router.js';
import userRouter from  './src/user/user.router.js';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());

app.use('/auth', authRouter);

app.use('/user', userRouter);

let puerto = 3001;

app.listen(puerto, () => console.log(`Escuchando por el puerto ${puerto}`));