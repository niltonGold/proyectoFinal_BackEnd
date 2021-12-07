import { createUser, userExists } from "./auth.model.js";

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
        res.status(201).send('Usuario Creado');
    }
}

/**
 * Crea una session JWT para el usuario{email, password} si existe en la BBDD
 * @param {*} req 
 * @param {*} res 
 */

export async function loginCtrl(req, res){
    const {email, password} = req.body;
    console.log(email);
    console.log(password);
    // const dd = await userExists(email, password);
    // console.log('dddd'+dd);
    if(await userExists(email, password)){
    // console.log('existen');
    // }else{
    //     console.log('no existe');
    // }

        const token = jwt.sign({email}, secretKey);
        res.send({
            // access_token: 'hola'
            respuesta:'ok'
        });
        console.log(token);
    }else{
        // res.status(404).send('Usuario/Contraseña erróneos');
        res.send({
            // access_token: 'hola'
            respuesta:'nook'
        });
        console.log('error de usuario');

    }
    
}