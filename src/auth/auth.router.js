import express from 'express';
import { loginCtrl, registerCtrl

} from './auth.controller.js';


const router = express.Router();


router.route('/register')
    .post( registerCtrl );//Create

router.route('/login')
    .post( loginCtrl );// verifica de si un usuario esta en la bbdd a partir de su user y pass

// router.route('/users')
//     .get(getUsersCtrl);
    
// router.route('/:dni')
//     .get(getUserByDni)
//     .delete(deleteByDni)
//     .patch(patchByDni);

// router.route('/:dni') 
//     .delete(deleteByDni);  

// router.route('/:dni')
//     .patch(patchByDni);     


export default router;