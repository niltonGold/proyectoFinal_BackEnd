import { createUser, userExists, registerTokenAndEmailModel, existEmailSessionModel } from "./auth.model.js";

import jwt from 'jsonwebtoken';

const secretKey = 'clave';

/**
 * Crea un usuario recibido en la req si no existe previamente
 * @param {Object<Request>} req 
 * @param {Object<Response>} res 
 */
export async function registerCtrl(req, res){
    const { email } = req.body;
    const isUser = await userExists(email);
    
    if (isUser ){
        res.status(409).send('El usuario ya existe');// es un conflict por que el usuario ya existe en la BBDD 
    }else{
        await createUser(req.body);
        // res.status(201).send('Usuario Creado');
        res.send({
            // access_token: 'hola'
            respuesta: 'usuario creado',
        });
    }
}

/**
 * Crea una session JWT para el usuario{email, password} si existe en la BBDD
 * @param {*} req 
 * @param {*} res 
 */

export async function loginCtrl(req, res){
    const {email, password} = req.body;
    // console.log(email);
    // console.log(password);
    // const dd = await userExists(email, password);
    // console.log('dddd'+dd);
    const existEmailInSesion = await existEmailSessionModel(email);
    const existUserInBBDD =  await userExists(email, password);
    console.log('controller: '+existEmailInSesion);
    const token = jwt.sign({email}, secretKey);
    if( existUserInBBDD && !existEmailInSesion){
    // console.log('existen');
    // }else{
    //     console.log('no existe');
    // }

        

        await registerTokenAndEmailModel(email,token);
   

        


        res.send({
 
                respuesta: `SessionIniciada.${token}`
           
        });
        // console.log('controller: '+token);
    }else if( existUserInBBDD && existEmailInSesion){
        // res.status(404).send('Usuario/Contraseña erróneos');
        
        res.send({
            // access_token: 'hola'
            respuesta:`UsuarioEnSesion.${token}`
        });

    }else{
        // res.status(404).send('Usuario/Contraseña erróneos');
        
        res.send({
            // access_token: 'hola'
            respuesta:'UsuarioIncorrecto.'
        });
        console.log('error de usuario');

    }
    
}





