import filmeModel from "../models/filmeModel.js";

class Filmes {
    async BuscarTodosOsFilmes(req, res){
        try{
            const filmes = await filmeModel.findAll();




        }
        catch(err){

        }



    }
}