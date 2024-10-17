const validateUser = (req,res,next) => {
    const {nome, email} = req.body;

    if(!nome || typeof nome !== 'string') {
        return res.status(400).json({
            msg : 'Campos invalidos'
        })
    }

    if(!email || typeof email !== 'string'){
        return res.status(400).json({
            msg : 'Campos invalidos'
        })
    }

    // Validando se o email possui email e ponto
    if(!(email.includes("@") && email.includes("."))){
        return res.status(400).json({
            msg : 'Campo email invalido'
        })
    }

    return next();
}

const validateUserId = (req,res,next) => {
    const {id} = req.params;

    if(!id || typeof id !== 'string'){
        return res.status(400).json({
            msg : 'Parametros invalidos'
        })
    }

    return next();
}


module.exports = {validateUser, validateUserId}