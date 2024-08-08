import express from "express";
import filmeController from "../controllers/filmeController.js";

const router = express.Router();
const filme = new filmeController();

router.get('/', (req, res) => {

    try{
        filme.BuscarTodosOsFilmes(req,res);
    } catch(err){
        res.status(500).json({error: err.message});
    }
});

export default router;