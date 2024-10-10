const User = require('../models/user');

const userService = {
    create: async (data) => {
        try {
            const user = await User.create(data);

            return user

        } catch (error) {
            throw new Error('Ocorreu um erro ao Criar User');
        }
    },
    update: async (id,data) => {
        try {

            const user = await User.findByPk(id);

            if(!user) {
                return null;
            }

            return await user.update(data);

            // await user.save();

        } catch (error) {
            throw new Error('Ocorreu um erro ao Atualizar User');
        }
    },
    getById : async (id) => {
        try {

            const user = await User.findByPk(id);

            if(!user){
                return null;
            }

            return user;

        } catch (error) {
            throw new Error('Ocorreu um erro ao buscar unico User');
        }
    },
    getAll : async () => {
        try {
            const users = await User.findAll();

            return users
        } catch (error) {
            throw new Error('Ocorreu um erro ao buscar todos User');
        }
    },
    delete : async (id) => {
        try {
            const user = await User.findByPk(id);

            if(!user){
                return null;
            }

            await user.destroy();
            return user;
        } catch (error) {
            throw new Error('Ocorreu um erro ao deletar o User');
        }
    }
}


module.exports = userService;