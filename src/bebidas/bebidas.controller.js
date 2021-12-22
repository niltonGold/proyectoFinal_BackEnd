import { retrieveBebidasModel } from "./bebidas.model.js";


 export async function getBebidasCtrl(req, res) {//

    const bebidas = await retrieveBebidasModel();

    res.json(bebidas);
}