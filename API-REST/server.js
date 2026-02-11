import app from './src/app.js'

const port =3000

// Escutando a porta
app.listen(port, () =>{
    console.log(`Servidor rodando http://localhost:${port}`)
})