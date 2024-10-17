const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Adm = sequelize.define('adm' , {
    nome : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    email : {
        type : DataTypes.STRING,
        allowNull : false
    },
    senha : {
        type : DataTypes.STRING,
        allowNull : false
    }
})


module.exports = Adm ;