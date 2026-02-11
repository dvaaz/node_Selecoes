import express from 'express'

const app = express()

// Indicar para o express ler o body como json
app.use(express.json())

// funcoes
function findSelecaoById(id) { // busca o Objeto inteiro
    let index = parseInt(id) // força a transformação da string em number evitando erros
    return selecoes.find(selecao => selecao.id === index)
}

function findIndexSelecao(id) {
    let index = parseInt(id) // força a transformação da string em number evitando erros
    return selecoes.findIndex(selecao => selecao.id === index)
}

//Mock
const selecoes = [
    {id:1, selecao: 'Brasil', grupo:'C'},
    {id:2, selecao: 'EUA', grupo:'A'},
    {id:3, selecao: 'Canada', grupo:'B'},
    {id:4, selecao: 'Alemanha', grupo:'D'},

]

// Criando uma rota padr"ao (ou raiz)
app.get('/',(req,res)=>{
    res.send('Hello World')
})

// GET, todas as seleções
app.get('/selecoes',(req,res)=>{
    res.status(200).send(selecoes)
})

app.get('/selecoes/:id',(req, res)=>{

    console.log(req.params.id)
    let selecao = findSelecaoById(req.params.id)

    
    if (selecao) {
    res.status(200)
    .send(selecao)
    } else {
    res.status(404)
    .send('Seleção não encontrada')
    }
})

// POST, selecao
app.post('/selecoes', (req,res)=> {
    selecoes.push(req.body)
    res.status(200).send('Seleção cadastrada com sucesso!')
})

// DELETE, selecao
app.delete('/selecoes/:id', (req,res)=>{
    console.log(req.params.id)
    let selecao = findIndexSelecao(req.params.id)
    console.log(`Selecao ${selecao}`)

    if (selecao) {
        selecoes.splice(selecao, 1)
        res.status(200)
        .send(selecoes)
    } else {
        res.status(404)
        .send('Seleção não encontrada')
    }
})
// Fazer o PUT
// PUT, selecao
app.put('selecoes/:id', (req, res)=>{
    console.log(req.params.id)
    
})


export default app
