//Criar o servidor
const express = require('express')
const rotas = require('./routes')
const path = require('path')
const rotasDeProdutos = require('./routes/produtos')

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.resolve('views'))


app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(rotas)
app.use(rotasDeProdutos)



app.listen(3000, () => console.log('servidor online'));












