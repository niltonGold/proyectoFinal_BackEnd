import express from 'express';
import authRouter from  './src/auth/auth.router.js';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());

app.use('/auth', authRouter);



app.listen(3001, () => console.log(`Escuchando por el puerto 3001`));