const express = require('express');
const body = require('body-parser');
const cors = require('cors');
const userService = require('./services/userService')
const taskService = require('./services/taskService')

const app = express();
app.use(cors());
app.use(body.json());

app.get('/teste', (req, res) => {
    res.status(200).send('Teste')
})

app.post('/login', (req, res) => {
    const {user, senha} = req.body;

    const user_autenticado = userService.login(user,senha)

    if(user_autenticado) {
        res.status(200).send(user_autenticado)
    } else {
        res.status(204).send({message: 'Credenciais inválidas'})
    }
})

app.post('/cadastro', (req, res) => {
    const {user, senha} = req.body;

    const user_autenticado = userService.addUser(user,senha)

    if(user_autenticado) {
        res.status(200).send({message: 'Usuário cadastrado com sucesso'})
    } else {
        res.status(422).send({message: 'Usuário já cadastrado.'})
    }
})

app.post('/tarefas/cadastro', (req,res) => {
    const {tipo, titulo, descricao, entrega_estimada} = req.body;
    
    taskService.addTask(tipo,titulo,descricao,entrega_estimada)

    res.status(200).send({message:'Tarefa cadastrada com sucesso.'})
})

app.get('/tarefas', (req,res) => {
    const tasks = taskService.getAllTasks()

    res.status(200).send(tasks)
})

app.get('/tarefas/:id', (req, res) => {
    const id = Number(req.params.id)

    const task_encontrada = taskService.getTaskById(id)

    if(task_encontrada){
        res.status(200).send(task_encontrada)
    } else {
        res.status(204).send({message:"Tarefa não encontrada"})
    }
})

app.listen(8000)