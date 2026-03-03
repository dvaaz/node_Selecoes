import app from './src/app.js'
// import conexao from './infra/conexao.js'

const port =3000

// realizando a connection
// conexao.connect((erro) => {
//     if ( erro ) {
//         console.log('Erro ao conectar ao banco de dados:', erro)

//     } else {
//         console.log('Conexao ao db realizada com sucesso')
        // Escutando a porta
        // se houver a conexao ao db ele liga o servidor
        app.listen(port, () =>{
            console.log(`Servidor rodando http://localhost:${port}`)
        })
//     }
// })
