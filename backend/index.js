const express = require('express')
const app = express()
const cors = require('cors')

const PORT = 3000
const hostname = 'localhost'

const conn = require('./db/conn')

const funcionarioController = require('./controller/funcionario.controller')
const materialController = require('./controller/material.controller')
const movimentoController = require('./controller/movimento.controller')
const obraController = require('./controller/obra.controller')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.post('/funcionario',funcionarioController.cadastrar)

app.post('/obra',obraController.cadastrar)
app.post('/material',materialController.cadastrar)
app.post('/movimento',movimentoController.cadastrar)

app.get('/material/:id',materialController.consultar)
app.get('/materiais',materialController.listar)

app.get('/movimento/:id',movimentoController.consultar)
app.get('/movimentos',movimentoController.listar)

app.get('/obra/:id',obraController.consultar)
app.get('/obras',obraController.listar)

app.get('/',(req,res)=>{
    console.log('aplicação rodando!')
})
conn.sync()
.then(()=>{
    app.listen(PORT,hostname,()=>{
        console.log(`Aplicalçao rodando em http://${hostname}:${PORT}`)
    })
})

.catch((err)=>{
    console.error('erro',err)
})