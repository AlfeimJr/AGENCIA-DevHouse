const {uuid} = require('uuidv4')
let produtos = [
    {
        id: uuid(),
        nome: 'CursoJs',
        descricao:'Curso de javaScript Completo',
        imagem:'https://www.google.com/search?q=javascript&sxsrf=ALeKk03v80AKIW_eDRTW0JEZwyCt5dN9BQ:1628809647895&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjlm-DjzKzyAhWND7kGHTyXBF0Q_AUoAXoECAEQAw&biw=1920&bih=969#imgrc=imsyna4i1ZfCQM',
    }
]
function cadastrarProdutos (nome, descricao, imagem){
    const novoProduto = {
        id: uuid(),
        nome,
        descricao,
        imagem,
    }
    
    listaDeProdutos.push(novoProduto)
}

function deletarProduto(id){
    const novaListaDeProdutos = listaDeProdutos.filter(produto => produto.id != id);
    
    if(novaListaDeProdutos.length >= listaDeProdutos.length) 
    return false;

    listaDeProdutos = novaListaDeProdutos;
    return true;
 }



module.exports = {produtos, cadastrarProdutos, deletarProduto};