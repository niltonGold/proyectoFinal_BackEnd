import { retrieveUsers, retrieveUserByDni, deleteUserByDni, patchUserByDni } from "./user.model.js";



/**
 * funcion para devolver todos los usuarios
 */
 export async function getUsersCtrl(req, res) {//

    // la funcion que esta en el modelo me devuelve los datos
    // la funcion del modelo me devuelve una promesa porque es asyncrona  
    const users = await retrieveUsers();

    // obtengo las letevisones y las devuelvo
    res.json(users);
}







/**
 * Funcion para poder buscar un usuario por dni
 */
 export async function getUserByDniCtrl(req, res) {
    // obtengo el id del path param, es decir lo que escribo en la url
    // llamo a la funcion de mi modelo que me promete que con los datos que gestione me
    // devolvera ese id 
    // obtengo del model la tv con ese id

    const dni = req.params.dni;// el modelo gestiona los ID como number

    // isNaN determina si el valor es nan o no
    // si tenemos un number buscamos por id si no buscamos por modelo
    let user = await retrieveUserByDni(dni) 
 
    console.log(user);

    // devuelvo al usuario la tv
    if (user !== undefined){
        res.json(user);
    }else{
        res.sendStatus(404);
    }

}



/**
 * funcion para borrar un usuario
 */
export async function deleteUserByDniCtrl(req, res) {
    const dni = req.params.dni;
    
    let respuesta = await deleteUserByDni(dni); 
    console.log(respuesta);
    if ( respuesta.deletedCount !== 0){
        // res.status(200).send('Usuario borrado correctamente');
        res.send({
            // access_token: 'hola'
            respuesta:'usuario borrado correctamente.'
        });

    }else{
        // res.status(404).send('Usuario no encontrado');
        res.send({
            // access_token: 'hola'
            respuesta:'usuario no encontrado'
        });
    }


}







/**
 * funcion para actualizar un usuario
 */

export async function patchUserByDniCtrl(req, res) {
    const dni = req.params.dni;
    const { email, password} = req.body;
    // console.log(email);
    // console.log(password);

     
    let respuesta = await patchUserByDni(dni, email, password);
    console.log(respuesta);
    if ( respuesta !== 'error'){
            let user = await retrieveUserByDni(dni);
            // res.json(user); 
            res.send({
                // access_token: 'hola'
                respuesta: user.nombre,
            });
    }else {
        res.status(404).send('Solo puedes modificar email y/o contraseña');
    }

}