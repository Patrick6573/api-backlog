import filmeModel from "../models/filmeModel.js";

export default class Filmes {
    async BuscarTodosOsFilmes(req, res){
        try{
            const filmes = await filmeModel.findAll();
            return res.json(filmes);
        }
        catch(err){
            return res.status(500).json({erro: err.menssage});
        };
    }
    async BuscarFilmePorId(req, res){
        try {
            const filmeEncontrado = await filmeModel.findByPk(req.params.id);
            if(!filmeEncontrado){
                return res.status(404).json({erro: "Filme não Encontrado"});
            }
            return res.json(filmeEncontrado);

        } catch (err) {
            res.status(500).json({error: err.message});
        }
    }
    
    async CadastrarFilmes(req,res){
        try{
            const filmeCadastrado = await filmeModel.create(req.body);
            return res.json({message: "Filme cadastrado com sucesso!", filmeCadastrado});

        } catch(err){
            return res.status(500).json({erro: err.menssage});
        }
    }
    async AtualizarFilme(req,res){
        try {
            const [atualizado] = await filmeModel.update(req.body, 
            {
                where: {id: req.params.id}
            });
            if(!atualizado){
                return res.status(404).json ({erro: 'Filme não encontrado!'});   
            }        
            const filmeAtualizado = await filmeModel.findByPk(req.params.id);
                return res.json({menssage: 'Filme Atualizado com Sucesso', filme: filmeAtualizado});    
            
        } catch (err) {
            res.status(500).json({error: err.message});
        }
    }




}