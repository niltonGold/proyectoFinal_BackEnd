import { retrieveEntrantesModel } from "./entrantes.model.js";


 export async function getEntratesCtrl(req, res) {//

    const entrantes = await retrieveEntrantesModel();

    res.json(entrantes);
}