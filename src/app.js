import express from 'express';
import bodyParser from 'body-parser';


//constante que importa as rotas
const app=express();


app.use(bodyParser.jason());

app.use('/',filmeRoutes);

//exportando por default tudo que foi feito 
export default app;