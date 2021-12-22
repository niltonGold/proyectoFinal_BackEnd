import { MongoClient} from "mongodb";



const URI = 'mongodb+srv://nilton:nilton@cluster0.vwb47.mongodb.net/restaurante?retryWrites=true&w=majority';

const client = new MongoClient(URI);


export async function retrieveEntrantesModel(){
    try{
        await client.connect();
        const db = client.db('restaurante');
        const entrantes = db.collection('entrantes');
        return await entrantes.find().toArray();
    }catch(err){
        console.log(err);
    }finally{
        await client.close();
    }
}