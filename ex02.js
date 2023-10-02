const express = require('express')

const app = express()


app.use('/api', (req,res,next)=> {
    console.log('Inicio...')
    next()
    console.log('Fim...')
})

app.get('/api', (req,res,next)=>{
    console.log('Resposta')
    res.send('<h1>Olá express</h1>')
})

app.listen(3000, ()=>{
    console.log('Servidor iniciado na porta 3000')
})