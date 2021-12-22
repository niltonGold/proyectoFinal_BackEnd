import { retrieveSegundosModel } from "./segundos.model.js";


 export async function getSegundosCtrl(req, res) {//

    const segundos = await retrieveSegundosModel();

    res.json(segundos);
}