const fs = require('fs');
// Biblioteca para ler arquivos
// Crio uma constante que recebe o conteúdo do arquivo
const meusLivros = fs.readFileSync('livros.json', 'utf-8');

exports.buscarLivros = () =>{
    return JSON.parse(meusLivros);
}

exports.buscarLivrosPorTitulos = (title) =>{
    const livros = JSON.parse(meusLivros);
    return livros.filter( livro => livro.title.toLowerCase().includes(title.toLowerCase()));
}