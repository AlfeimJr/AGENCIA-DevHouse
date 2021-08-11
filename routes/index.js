const express = require('express')
const path = require('path');
const indexController = require('../controllers/index');
const routes = express.Router();
const depoimentos = require('../models/depoimentos')

routes.get('/', indexController.home)


routes.get('/home', indexController.home)

routes.get('/manutencao', indexController.exibirManutencao)

routes.get('/blog', indexController.exibirBlog)

routes.get('/contato', indexController.exibirContato)

routes.get('/depoimentos', (req, res)=>{  
    res.render('depoimentos', { depoimentos, titulo: "Depoimentos" })
})

routes.post('/receber-contato', (req,res)=> {
    console.log(req.body);
    res.send('contato recebido')   
})


module.exports = routes;