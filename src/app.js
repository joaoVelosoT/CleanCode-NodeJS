require('dotenv').config // Arquivo => .env
const express = require('express');
const { sequelize } = require('./models');

const app = express(); // Iniciando o servidor

app.use(express.json()); // Resposta via JSON


sequelize.authenticate()
.then(() => {
    console.log("Conexao com o banco de dados deu certo");
})
.catch(err => {
    console.error("Erro ao conectar no banco: ", err);
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('-------------------------------------');
    console.log(`Running on http://${PORT}`);
    console.log('-------------------------------------');
})