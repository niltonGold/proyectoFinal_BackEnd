import express from 'express';
import { getEntratesCtrl } from './entrantes.controller.js';

const router = express.Router();

router.route('/')
    .get(getEntratesCtrl);

export default router;    