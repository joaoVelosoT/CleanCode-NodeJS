const userService = require("../services/userService");

const userController = {
  create: async (req, res) => {
    try {
      const data = {
        nome : req.body.nome,
        email : req.body.email
      }

      const user = await userService.create(data);

      return res.status(201).json({
        msg: "Usuario criado com sucesso",
        user,
      });


    } catch (error) {
      return res.status(500).json({
        msg: "Erro ao tentar criar o Usuario",
      });
    }
  },
  update : async (req,res) => {
    try {
        const {id} = req.params;

        const data = {
          nome : req.body.nome,
          email : req.body.email
        }

        const user = await userService.update(id,data);

        if(!user){
            return res.status(400).json({
                msg : 'User não encontrado '
            })
        }

        return res.status(200).json({
            msg : 'User atualizado com sucesso',
            user
        })

        
    } catch (error) {
        return res.status(500).json({
            msg : 'Erro ao atualizar o User'
        })
    }
  }
};

module.exports = userController;
