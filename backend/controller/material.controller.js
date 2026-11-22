
const Material = require('../models/Material')

const cadastrar = async(req,res)=>{
    const valores = req.body

    if(!valores.idObra || !valores.descricao || !valores.quantidade || !valores.codLote){
        return res.status(400).json({message: "Todos os campos são obrigatorios"})
    }

    try {
        await Material.create(valores)

        return res.status(201).json({message: "material cadastrado!"})

    } catch (err) {
        console.error('Erro ao cadastrar', err)
        return res.status(500).json({message: 'Erro ao cadastrar material'})
    }
}

const consultar = async(req,res)=>{
    const id = req.params.id

    try {
        const material = await Material.findByPk(id)

        if(!material){
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
        const materiais = await Material.findAll()

        return res.status(200).json(materiais)

    } catch (err) {
        console.error('Erro ao listar funcionarios', err)
        return res.status(500).json({message: 'Erro ao listar funcionarios'})
    }
}

module.exports = {cadastrar, consultar, listar}
