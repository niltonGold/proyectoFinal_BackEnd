import { MongoClient} from "mongodb";



const URI = 'mongodb+srv://nilton:nilton@cluster0.vwb47.mongodb.net/restaurante?retryWrites=true&w=majority';

const client = new MongoClient(URI);


/**
 * Crea un usuario en la BBDD
 * @param {*} user 
 */
export async function createUser(user){
    try{
        await client.connect();
        const db = client.db('restaurante');
        const collection = db.collection('users');
        await collection.insertOne(user);

    }catch(err){
            console.error(err);
    }finally{
        await client.close();
    }
}


/**
 * 
 * @param {*} email 
 * @param {*} password 
 * @returns 
 */
export async function userExists(email, password){
    try{
        await client.connect();
        const db = client.db('restaurante');
        const collection = db.collection('users');
        const q = {email};
        if (password !== undefined){
            q.password = password;
        }
        const user = await collection.findOne(q);
        return user !== null;

    }catch(err){
            console.error(err);
    }finally{
        await client.close();
    }
    
}