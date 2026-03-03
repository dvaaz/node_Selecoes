import express from 'express'
import conexao from '../infra/conexao.js'

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

function conectionStatusHandler(error, result){
    // TODO: limpar os if elses de resposta
}

//Mock
// const selecoes = [
//     {id:1, selecao: 'Brasil', grupo:'C'},
//     {id:2, selecao: 'EUA', grupo:'A'},
//     {id:3, selecao: 'Canada', grupo:'B'},
//     {id:4, selecao: 'Alemanha', grupo:'D'},

// ] // será utilizado o db

// Criando uma rota padr"ao (ou raiz)
// app.get('/',(req,res)=>{
//     res.send('Hello World from Node')
// })

// GET, todas as seleções
app.get('/selecoes',(req,res)=>{
    // res.status(200).send(selecoes)
    const sql = "SELECT * FROM db_selecoes.db_selecao;"
    conexao.query(sql, (error, resultado)=>{
        conectionStatusHandler(error, resultado);
    })
})

app.get('/selecoes/:id',(req, res)=>{

    console.log(req.params.id)
    // let selecao = findSelecaoById(req.params.id)  
    // if (selecao) {
    // res.status(200)
    // .send(selecao)
    // } else {
    // res.status(404)
    // .send('Seleção não encontrada')
    // }
    const id = req.params.id;
    const sql = "SELECT * FROM db_selecoes.db_selecao WHERE id_selecao=?;"
    conexao.query(sql, id, (error, result)=>{
           if(error) {
            console.log(error)
            // TODO: status 404 error
        } else {
            res.status(200).json(result)
        }
    })
})

// POST, selecao
app.post('/selecoes', (req,res)=> {
    // selecoes.push(req.body)
    // res.status(200).send('Seleção cadastrada com sucesso!')
    
    const selecao = req.body
    const sql = "INSERT into db_selecoes.db_selecao SET ?;"
    conexao.query(sql, selecao, (error, resultado)=>{
        if(error) {
            console.log(error)
            // TODO: status 404 error
        } else {
            res.status(201).json(resultado)
        }
    })
})

// DELETE, selecao
app.delete('/selecoes/:id', (req,res)=>{
    console.log(req.params.id)
    let selecao = findIndexSelecao(req.params.id)
    console.log(`Selecao ${selecao}`)

    if (index !== -1) {
        selecoes.splice(index, 1)
        res.status(200)
        .send(selecoes)
    } else {
        res.status(404).send('Seleção não encontrada')
    }
})
// Fazer o PUT
// PUT, selecao
app.put("/selecoes/:id", (req, res) => {
    let index = findIndexSelecao(req.params.id)
    
    if (index !== -1) {
        selecoes[index] = req.body
        res.status(200).send("Seleção atualizada com sucesso!")
    } else {
        res.status(404).send("Seleção não encontrada")
    }
});


export default app
