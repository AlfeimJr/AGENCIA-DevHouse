const path = require('path')

const indexController ={
    home:((req, res)=>{
        res.render('home', {titulo: "Sua empresa vai ser incrivel"})
    }),
    exibirManutencao:((req, res)=>{
        res.render(path.resolve("views", "manutencao"))}),

    exibirBlog:((req, res)=>{
        res.render(path.resolve('views', 'blog'))
    }),
    exibirContato: ((req, res)=>{
        res.render(path.resolve('views', 'contato'))
    }),
}

module.exports = indexController;