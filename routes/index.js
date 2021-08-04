const express = require('express')
const path = require('path')
const routes = express.Router();
const depoimentos = require('../models/depoimentos')

routes.get('/', (req, res)=>{
    res.render('home', {titulo: "Sua empresa vai ser incrivel"})
})

routes.get('/home', (req, res)=>{
    res.render('home', {titulo: "Sua empresa vai ser incrivel"})
})

routes.get('/manutencao', (req, res)=>{
    res.sendFile(path.resolve("views", "manutencao"))})

routes.get('/blog', (req, res)=>{
    res.sendFile(path.resolve('views', 'blog.html'))
})

routes.get('/contato', (req, res)=>{
    res.sendFile(path.resolve('views', 'contato.html'))
})

routes.get('/depoimentos', (req, res)=>{  
    res.render('depoimentos', { depoimentos, titulo: "Depoimentos" })
})

routes.post('/receber-contato', (req,res)=> {
    console.log(req.body);
    res.send('contato recebido')   
})


module.exports = routes