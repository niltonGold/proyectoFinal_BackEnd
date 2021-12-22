import express from 'express';
import { getBebidasCtrl } from './bebidas.controller.js';

const router = express.Router();

router.route('/')
    .get(getBebidasCtrl);

export default router;    