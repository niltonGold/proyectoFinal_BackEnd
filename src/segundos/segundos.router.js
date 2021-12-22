import express from 'express';
import { getSegundosCtrl } from './segundos.controller.js';

const router = express.Router();

router.route('/')
    .get(getSegundosCtrl);

export default router;    