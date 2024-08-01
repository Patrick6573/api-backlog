import filmeModel from "../models/filmeModel.js";

export default class Filmes {
    async BuscarTodosOsFilmes(req, res){
        try{
            const filmes = await filmeModel.findAll();
            res.json(filmes);
        }
        catch(err){
            res.status(500).json({erro: err.menssage});
        };
    }
}