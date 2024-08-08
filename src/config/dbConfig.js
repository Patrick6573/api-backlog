import { Sequelize } from "sequelize";

const sequelize = new Sequelize('backlog', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => {
        console.log("Conectado ao MySql com Sequelize");
    })
    .catch(err => {
        console.error("Não foi possivel conectar ao banco de dados: ", err);
    });

    export default sequelize;



