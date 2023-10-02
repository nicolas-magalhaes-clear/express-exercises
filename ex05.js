const express = require('express')
const router = require('./ex05_routes')


const app = express()

app.use('/api', router )

app.listen(3000, ()=>{
    console.log('Servidor iniciado na porta 3000')
})