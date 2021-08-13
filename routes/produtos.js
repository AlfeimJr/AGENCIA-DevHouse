const express = require('express')
const path = require('path');
const indexController = require('../controllers/index');
const produtosController = require('../controllers/produtos');
const routes = express.Router();

routes.get('/cadastroProduto', produtosController.AdminProdutos)

routes.get('/produtos', produtosController.produto)

routes.get("/cadastroProduto", produtosController.AdminProdutos);
routes.post("/cadastroProduto", produtosController.salvarProduto);

module.exports = routes;