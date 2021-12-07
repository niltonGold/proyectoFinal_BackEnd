import express from 'express';
import { loginCtrl, registerCtrl } from './auth.controller.js';


const router = express.Router();


router.route('/register')
    .post( registerCtrl );

router.route('/login')
    .post( loginCtrl );

export default router;