
const Movimento = require('../models/Movimento')

const cadastrar = async(req,res)=>{
    const valores = req.body

    if(!valores.idMaterial || !valores.tipo || !valores.quantidadeMov || !valores.data){
        return res.status(400).json({message: "Todos os campos são obrigatorios"})
    }

    try {
        await Movimento.create(valores)

        return res.status(201).json({message: "Movimento cadastrado!"})

    } catch (err) {
        console.error('Erro ao cadastrar', err)
        return res.status(500).json({message: 'Erro ao cadastrar Movimento'})
    }
}

const consultar = async(req,res)=>{
    const id = req.params.id

    try {
        const movimento = await Movimento.findByPk(id)

        if(!movimento){
            return res.status(404).json({message: "Funcionario não encontrado!"})
        }
        return res.status(200).json(material)

    } catch (err) {
        console.error('Erro ao consultar', err)
        return res.status(500).json({message: 'Erro ao consultar funcionario'})
    }
}



const listar = async(req,res)=>{
    try {
        const movimentos = await Movimento.findAll()

        return res.status(200).json(movimentos)

    } catch (err) {
        console.error('Erro ao listar funcionarios', err)
        return res.status(500).json({message: 'Erro ao listar funcionarios'})
    }
}

module.exports = {cadastrar, consultar, listar}
