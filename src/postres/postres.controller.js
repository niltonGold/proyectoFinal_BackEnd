import { retrievePostresModel } from "./postres.model.js";


 export async function getPostresCtrl(req, res) {//

    const postres = await retrievePostresModel();

    res.json(postres);
}