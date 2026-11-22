
const resposta = document.getElementById('resposta')
const btn_cadastrar = document.getElementById('btn_cadastrar')

btn_cadastrar.addEventListener('click',(e)=>{
    e.preventDefault()

    const descricao = document.getElementById('descricao').value 
    const quantidade = document.getElementById('quantidade').value 
    const codLote = document.getElementById('codLote').value 
    const idObra = document.getElementById('idObra').value 

    const valores = {
        descricao: descricao,
        quantidade: quantidade,
        codLote: codLote,
        idObra: idObra
    }

    console.log(valores)

    fetch('http://localhost:3000/material',{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(valores)
    })
    .then(res => res.json())
    .then(dados => {
        resposta.innerHTML = `<p>${dados.message}</p>`
    })
    .catch((err)=>{
        console.error('erro',err)
    })
})
