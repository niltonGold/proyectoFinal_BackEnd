import express from 'express';
import authRouter from  './src/auth/auth.router.js';
import userRouter from  './src/user/user.router.js';

import bebidasRouter from  './src/bebidas/bebidas.router.js';
import entratesRouter from  './src/entrantes/entrantes.router.js';
import segundosRouter from  './src/segundos/segundos.router.js';
import postresRouter from  './src/postres/postres.router.js';


import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());

app.use('/auth', authRouter);

app.use('/user', userRouter);

app.use('/bebidas', bebidasRouter);

app.use('/entrantes', entratesRouter);

app.use('/segundos', segundosRouter);

app.use('/postres', postresRouter);

let puerto = 3001;

app.listen(puerto, () => console.log(`Escuchando por el puerto ${puerto}`));