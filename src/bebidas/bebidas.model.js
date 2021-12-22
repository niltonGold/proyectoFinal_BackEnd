import { MongoClient} from "mongodb";



const URI = 'mongodb+srv://nilton:nilton@cluster0.vwb47.mongodb.net/restaurante?retryWrites=true&w=majority';

const client = new MongoClient(URI);


export async function retrieveBebidasModel(){
    try{
        await client.connect();
        const db = client.db('restaurante');
        const bebidas = db.collection('bebidas');
        return await bebidas.find().toArray();
    }catch(err){
        console.log(err);
    }finally{
        await client.close();
    }
}