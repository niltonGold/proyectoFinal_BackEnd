import express from 'express';
import { getUsersCtrl, getUserByDniCtrl,

    deleteUserByDniCtrl,
    patchUserByDniCtrl

} from './user.controller.js';


const router = express.Router();


router.route('/')// Read todos los usuarios
    .get(getUsersCtrl);
    
router.route('/:dni') // ruta para obtener los datos por dni
    .get(getUserByDniCtrl)
    .delete(deleteUserByDniCtrl)
    .patch(patchUserByDniCtrl);

    
 


export default router;