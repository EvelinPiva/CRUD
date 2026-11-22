const Funcionario = require('./Funcionario')
const Material = require('./Material')
const Obra = require('./Obra')
const Movimento = require('./Movimento')

Obra.hasMany(Material,{
    foreignKey: 'idObra',
    as: 'materialObra',
    onDelete: 'CASCADE'
})

Material.belongsTo(Obra,{
    foreignKey: 'idObra',
    as: 'obraMaterial',
    allowNull: false
})

Material.hasMany(Movimento,{
    foreignKey: 'idMaterial',
    as: 'movimentoMaterial',
    onDelete: 'CASCADE'
})

Movimento.belongsTo(Material,{
    foreignKey: 'idMaterial',
    as: 'materialMovimento',
    allowNull: false
})
module.exports = {Obra,Movimento,Material,Funcionario}