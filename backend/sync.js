const {Funcionario,Movimento,Obra,Material} = require('./models/rel')
const conn = require('./db/conn')

async function syncDataBase(){
    try {
        await conn.sync({force:true})
        console.log('Tabelas sincronizadas com sucesso!')
    } catch (err) {
        console.error('erro ao sincronizar tabelas',err)
    }finally{
        await conn.close()
        console.log('Fechando banco de dados')
    }
}
syncDataBase()