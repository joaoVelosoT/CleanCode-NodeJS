const { indexOf } = require("../models");
const Adm = require("../models/adm");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const admService = {
    create : async (req) => {
        try {

            const hashSenha = await bcrypt.hash(req.body.senha, 10);

            const data = {
                nome : req.body.nome,
                email : req.body.email,
                senha : hashSenha
            }


            return await Adm.create(data);


        } catch (error) {
            console.error(error);
            throw new Error("Erro, contate o suporte");
            
        }
    },
    getAll : async () => {
        try {

            return await Adm.findAll();

        } catch (error) {
            console.error(error);
            throw new Error("Erro, contate o suporte");
            
        }
    },
    getOne : async (id) => {
        try {
            const adm = await Adm.findByPk(id);

            if(!adm){
                return null
            }

            return adm
        } catch (error) {
            console.error(error);
            throw new Error("Erro, contate o suporte");
            
        }
    },
    update : async (id, data) => {
        try {
            const adm = await Adm.findByPk(id);
            
            if(!adm){
                return null
            }

            return await adm.update(data);
        } catch (error) {
            console.error(error);
            throw new Error("Erro, contate o suporte");
            
        }
    },
    delete : async (id) => {
        try {
            const adm = await Adm.findByPk(id);
            
            if(!adm){
                return null
            }

            return await adm.destroy();
        } catch (error) {
            console.error(error);
            throw new Error("Erro, contate o suporte");
            
        }
    },
    login : async (email, senha) => {
        try {

            const adm = await Adm.findOne({ where : {email : email}})
            if(!adm){
                return null
            }

            const isValida = await bcrypt.compare(senha, adm.senha);
            if(!isValida){
                return null
            }

            const token = jwt.sign({
                email : adm.email,
                id : adm.id 
            }, process.env.SECRET, {expiresIn : '1h'})

            return token

        } catch (error) {
            console.error(error);
            throw new Error("Erro, contate o suporte");
        }
    }
}

module.exports = admService;