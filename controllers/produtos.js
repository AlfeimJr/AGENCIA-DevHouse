
const produtoModel = require ('../models/produtos')

const produtosController = {
    produto: (req, res)=>{
        res.render('admin/produtos',{
            produtos: produtoModel.listaDeProdutos,
        }
        )},
    AdminProdutos: ((req, res)=>{
        res.render ('admin/cadastroProduto')
    }),
    salvarProduto: ((req, res)=>{
        const {nome, descricao,imagem} = req.body
        produtoModel.cadastrarProduto(nome, descricao, imagem)

        console.log(produtoModel.listaDeProdutos)

        res.send('Cadastro concluido')

    }),
    excluirProduto:(req, res)=>{
        const {id} = req.params;
        const resultado = produtoModel.excluirProduto(id)
        res.redirect('/produtos')
    },

}
module.exports = produtosController;