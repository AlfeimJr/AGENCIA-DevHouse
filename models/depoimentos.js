let depoimentos =[
    {
        autor: 'vinny',
        titulo: 'depoimento fake',
        descricao: "teste teste teste teste teste teste",
    },
    {
        autor: 'gabriel',
        titulo: 'depoimento fake 2',
        descricao: "teste teste teste teste teste teste",
    },
    {
        autor: 'Natalia',
        titulo: 'depoimento fake 3',
        descricao: "teste teste teste teste teste teste",
    },
];
function cadastrarDepoimento(autor, titulo, descricao) {
    return depoimentos.push({
      autor,
      titulo,
      descricao,
    });
  }

module.exports = {depoimentos, cadastrarDepoimento};