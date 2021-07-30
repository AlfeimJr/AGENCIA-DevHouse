//Criar o servidor
const express = require('express')
const rotas = require('./routes')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(rotas)




app.listen(3000, () => console.log('servidor online'))












