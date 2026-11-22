const Funcionario = require('../models/Funcionario')

const cadastrar = async(req,res)=>{
    const valores = req.body 
    console.log(valores)
    if(!valores.email || !valores.senha || !valores.nome){
        return res.status(400).json({message: 'Preencha'})
    }

    try{
        await Funcionario.create(valores)
        res.status(200).json({message: 'Funcionário criado com sucesso'})
        
    }catch(err){
        console.error('Erro ao cadastrar funcionário',err)
        res.status(500).json({message: 'Funcionário não cadastrado'})
    }
}
module.exports = {cadastrar}