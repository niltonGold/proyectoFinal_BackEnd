import { MongoClient} from "mongodb";



const URI = 'mongodb+srv://nilton:nilton@cluster0.vwb47.mongodb.net/restaurante?retryWrites=true&w=majority';

const client = new MongoClient(URI);



/**
 * funcion que me devolvera todos los usuarios
 * esta funcion es asincrona porque voy a utilizar promesas
 */
 export async function retrieveUsers(){
    try{
    // 1.- me conecto a la BBDD
        await client.connect();

    // una ves conectado puedo hacer el resto de operaciones
    
    // 2.- obtengo la base de datos
        const db = client.db('restaurante');// debo pasarle el nombe de la base de datos
    
    // 3.- obtengo la collection 
        const users = db.collection('users');

    // 4.- obtener y devolver los datos de la collection    
        // obtenemos el array de los documentos de esa collection
        return await users.find().toArray();// find devuelve un objeto llamado cursor, un objeto iterable

    }catch(err){
        console.log(err);
    }finally{
    // cierro la base de datos pase lo que pase
        await client.close();
    }
}




export async function retrieveUserByDni(dni) {
    try{
            await client.connect();
            const db = client.db('restaurante');
            const users = db.collection('users');
            return await users.findOne({
                'dni': dni 
            })
        }catch(err){
            console.log(err);
        }finally{
            await client.close();
        }
}



export async function deleteUserByDni(dni) {
    try{
            await client.connect();
            const db = client.db('restaurante');
            const users = db.collection('users');
            return await users.deleteOne({
                'dni': dni 
            })
        }catch(err){
            console.log(err);
        }finally{
            await client.close();
        }
}


export async function patchUserByDni(dni, email, password) {
    // console.log('model: '+dni);
    // console.log('model: '+email);
    // console.log('model: '+password);
    try{
            await client.connect();
            const db = client.db('restaurante');
            const users = db.collection('users');
            const filter = {dni};
            if ((email !== undefined) && (password === undefined)){
                    const updateDocument = {
                        $set:{
                            'email': email,
                        },
                    };
                    return await users.updateOne( filter, updateDocument);
            } else if ((email === undefined) && (password !== undefined)){

                    const updateDocument = {
                        $set:{
                            'password' : password,
                        },
                    };
                    return await users.updateOne( filter, updateDocument);
            } else if ((email !== undefined) && (password !== undefined)){

                    const updateDocument = {
                        $set:{
                            'email': email,
                            'password' : password,
                        },
                    };
                    return await users.updateOne( filter, updateDocument);
            } else if ((email === undefined) && (password === undefined)){

                return 'error';

            }         

        }catch(err){
            console.log(err);
        }finally{
            await client.close();
        }
}