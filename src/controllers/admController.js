const admService = require("../services/admService");
const bcrypt = require('bcryptjs');

const admController = {
    create : async (req,res) => {
        try {

            


            const adm = await admService.create(req);

            return res.status(200).json({
                msg : "adm criado com sucesso !",
                adm
            })
        } catch (error) {
            console.error(error);
            return res.status(400).json({
                msg : 'Erro, Contate o suporte'
            })
        }
    },
    getAll : async (req,res) => {
        try {
            
            const adms = await admService.getAll();

            return res.status(200).json({
                msg : "Adms encontrados",
                adms
            })
        } catch (error) {
            console.error(error);
            return res.status(400).json({
                msg : 'Erro, Contate o suporte'
            })
        }
    },
    getOne : async (req,res) => {
        try {
            const {id} = req.params;

            const adm = await admService.getOne(id);

            if(!adm) {
                return res.status(400).json({
                    msg : "Adm não encontrado !"
                })
            }

            return res.status(200).json({
                msg : "Adm encontrado !",
                adm
            })

        } catch (error) {
            console.error(error);
            return res.status(400).json({
                msg : 'Erro, Contate o suporte'
            })
        }
    },
    update : async (req,res) => {
        try {

            const {id} = req.params;

            const data = {
                nome : req.body.nome,
                email : req.body.email,
                senha : req.body.senha
            }

            const adm = await admService.update(id, data);

            if(!adm) {
                return res.status(400).json({
                    msg : "Adm não encontrado !"
                })
            }

            return res.status(200).json({
                msg : "Adm atualizado com sucesso !",
                adm
            })


        } catch (error) {
            console.error(error);
            return res.status(400).json({
                msg : 'Erro, Contate o suporte'
            })
        }
    },
    delete : async (req,res) => {
        try {
            const {id} = req.params;

            const adm = await admService.delete(id);

            if(!adm) {
                return res.status(400).json({
                    msg : "Adm não encontrado !"
                })
            }

            return res.status(200).json({
                msg : "Adm deletado com sucesso !",
                adm
            })
        } catch (error) {
            console.error(error);
            return res.status(400).json({
                msg : 'Erro, Contate o suporte'
            })
        }
    },
    login : async (req,res) => {
        try {
            const { email , senha } = req.body;

            const login = await admService.login(email, senha);

            if(!login){
                return res.status(400).json({
                    msg : "Email ou senha invalidos"
                })
            }


            return res.status(200).json({
                msg : "Login feito com sucesso !",
                login
            })
        } catch (error) {
            console.error(error);
            return res.status(400).json({
                msg : 'Erro, Contate o suporte'
            })
        }
    }
}


module.exports = admController;