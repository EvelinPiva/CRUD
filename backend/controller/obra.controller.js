
const Obra = require('../models/Obra')

const cadastrar = async(req,res)=>{
    const valores = req.body

    if(!valores.codIdentificacao || !valores.nome || !valores.cnpj){
        return res.status(400).json({message: "Todos os campos são obrigatorios"})
    }

    try {
        await Obra.create(valores)

        return res.status(201).json({message: "obra cadastrado!"})

    } catch (err) {
        console.error('Erro ao cadastrar', err)
        return res.status(500).json({message: 'Erro ao cadastrar obra'})
    }
}

const consultar = async(req,res)=>{
    const id = req.params.id

    try {
        const obra = await Obra.findByPk(id)

        if(!obra){
            return res.status(404).json({message: "Funcionario não encontrado!"})
        }
        return res.status(200).json(obra)

    } catch (err) {
        console.error('Erro ao consultar', err)
        return res.status(500).json({message: 'Erro ao consultar funcionario'})
    }
}



const listar = async(req,res)=>{
    try {
        const obras = await Obra.findAll()

        return res.status(200).json(obras)

    } catch (err) {
        console.error('Erro ao listar funcionarios', err)
        return res.status(500).json({message: 'Erro ao listar funcionarios'})
    }
}

module.exports = {cadastrar, consultar, listar}
