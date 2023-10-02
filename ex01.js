const express = require('express')

const app = express()



app.get('/', (req,res,next)=> {
    res.send('<h1>Index</h1>')
})

app.all('/teste', (req,res,next)=>{
    res.send('<h1>Teste de API!</h1>')
})

app.get('/api/', (req,res,next)=>{
    res.send('<h1>API</h1>')
})


app.listen(3000, ()=>{
    console.log('Servidor iniciado na porta 3000')
})