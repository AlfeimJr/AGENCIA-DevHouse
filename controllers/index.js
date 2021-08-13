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
    exibirDepoimentos: (req, res) => {
        res.render("depoimentos", {
          depoimentos: modelDepoimentos.depoimentos,
          titulo: "Depoimentos",
        });
      },
    
      exibirFormDepoimento: (req, res) => {
        res.render("cadastroDepoimento");
      },
    
      cadastrarDepoimento: (req, res) => {
        console.log(req.body);
        const { autor, titulo, descricao } = req.body;
    
        modelDepoimentos.cadastrarDepoimento(autor, titulo, descricao);
        return res.redirect("/depoimentos");
      },

      
}

module.exports = indexController;