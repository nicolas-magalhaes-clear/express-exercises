const express = require('express')

const app = express()


app.route('/clientes')
.get((req,res) => res.send('Lista de clientes'))
.post((req,res)=> res.send('Novo cliente'))
.put((req,res) => res.send('Altera cliente'))
.delete((req,res) => res.send('Cliente deletado'))

app.listen(3000, ()=>{
    console.log('Servidor iniciado na porta 3000')
})