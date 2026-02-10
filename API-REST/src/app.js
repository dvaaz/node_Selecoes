import express from 'express'

const app = express()

// Indicar para o express ler o body como json
app.use(express.json())

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

app.get('/selecoes/:id',(request, response)=>{
    const id = parseInt(request.params.id)
    const selecao = selecoes.find(s => s.id === id)
    
    if (selecao) {
    response.status(200)
    .send(selecoes)
    } else {
        
    }
})

// POST, selecoes
app.post('/selecoes', (req,res)=> {
    selecoes.push(req.body)
    res.status(200).send('Seleção cadastrada com sucesso!')
})


export default app
