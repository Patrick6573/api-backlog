import { DataTypes } from "sequelize"
import sequelize from "../config/dbConfig.js";

const filmeModel = sequelize.define('filmes', {
    id: {
        type: DataTypes.INTEGER, 
        allowNull: false,
        primaryKey: true,
        autoIncrement: false
    },
    titulo: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    diretor: {
        type: DataTypes.STRING, 
        allowNull: false


    },
    genero: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    ano: {
        type: DataTypes.INTEGER, 
        allowNull: false
    }

}, { 
    timestamps:false
});

export default filmeModel;
