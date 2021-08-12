const produtos = [
    {
        nome: 'CursoJs',
        descricao:'Curso de javaScript Completo',
        imagem:'https://www.google.com/search?q=javascript&sxsrf=ALeKk03v80AKIW_eDRTW0JEZwyCt5dN9BQ:1628809647895&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjlm-DjzKzyAhWND7kGHTyXBF0Q_AUoAXoECAEQAw&biw=1920&bih=969#imgrc=imsyna4i1ZfCQM',
    }
]
function cadastrarProdutos (nome, descricao, imagem){
    return produtos.push({
        nome,
        descricao,
        imagem,
    });
}

module.exports = {produtos};