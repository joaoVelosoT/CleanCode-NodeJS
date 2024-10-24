const validateAdm = (req,res) => {
    const {nome , email, senha} = req.body;

    if(!nome || typeof nome !== 'string'){
        return res.status(400).json({
            msg : "Revise seus dados"
        })
    }

    if(!email || typeof email !== 'string'){
        return res.status(400).json({
            msg : "Revise seus dados"
        })
    }

    if(!senha || typeof senha !== 'string'){
        return res.status(400).json({
            msg : "Revise seus dados"
        })
    }
}



module.exports = validateAdm;