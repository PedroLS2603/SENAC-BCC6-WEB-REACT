//chamando o pacote que eu instalei para dentro
//do meu projeto para poder usá-lo
const express = require('express');
const livrosImportados = require('./services/livroServices');
const usersServices = require('./services/usersServices');
const body = require('body-parser');
const cors = require('cors');
const e = require('express');

//crio uum objeto app para recer todas as funções do express
const app = express();
app.use(cors());
app.use(body.json());


//callback => função que é passada como parâmetro para ser executada
app.get('/livros', (req, res)=>{
    res.status(200).json(livrosImportados.buscarLivros())
});

app.get('/buscarLivrosPorTitulos/:title', (req, res)=>{
    const {title} = req.params;
    const resultado = livrosImportados.buscarLivrosPorTitulos(title);

    if(resultado){
        res.status(200).send(resultado);
    }
    else{
        res.status(404).send('Livro não encontrado');
    }

});

app.post('/addUser', (req, res)=>{
    const {name, email, password} = req.body;
    if(name && password && email){
        usersServices.addUser(name, email, password);
        res.status(200).send('Usuário cadastrado com sucesso');
    }
    else {
        res.status(400).send('Erro ao cadastrar usuário');
    }
})

app.listen(8000)