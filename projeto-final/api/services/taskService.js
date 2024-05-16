const fs = require('fs');

exports.addTask = (tipo, titulo, descricao, entrega_estimada) => {
    const jsonData = fs.readFileSync('tarefas.json', 'utf-8');
    const tasks = JSON.parse(jsonData);
    const ultimo_id = tasks[tasks.length - 1].id


    const newTask = {
        id: ultimo_id + 1,
        tipo: tipo,
        titulo: titulo,
        descricao: descricao,
        entrega_estimada: entrega_estimada,
        criado_em: Date.now().toString()
    }
    tasks.push(newTask);
    fs.writeFileSync('tarefas.json', JSON.stringify(tasks), 'utf-8');

    return newTask
}

exports.getAllTasks = () => {
    const jsonData = fs.readFileSync('tarefas.json', 'utf-8');
    const tasks = JSON.parse(jsonData);
    
    return tasks
}

exports.getTaskById = (id) => {
    const jsonData = fs.readFileSync('tarefas.json', 'utf-8');
    const tasks = JSON.parse(jsonData);
    const task_procurada = tasks.find( task => task.id == id)
    
    return task_procurada
}