import express from 'express';
import { getPostresCtrl } from './postres.controller.js';

const router = express.Router();

router.route('/')
    .get(getPostresCtrl);

export default router;    