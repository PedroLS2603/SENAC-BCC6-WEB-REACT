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
    let tasks = JSON.parse(jsonData);
    tasks.forEach(task => {
        task.entrega_estimada = new Date(parseInt(task.entrega_estimada) * 1000).toLocaleDateString()})
    console.log(tasks)
    
    return tasks
}

exports.getTaskById = (id) => {
    const jsonData = fs.readFileSync('tarefas.json', 'utf-8');
    const tasks = JSON.parse(jsonData);
    const task_procurada = tasks.find( task => task.id == id)
    
    return task_procurada
}

exports.updateById = (task_enviada) => {
    const jsonData = fs.readFileSync('tarefas.json', 'utf-8');
    const tasks = JSON.parse(jsonData);
    const idx_elemento = tasks.findIndex(task => task.id == task_enviada.id)

    if(idx_elemento >= 0) {
        tasks[idx_elemento] = task_enviada
        fs.writeFileSync('tarefas.json', JSON.stringify(tasks), 'utf-8');

        return task_enviada
    }

    return null
}

exports.deleteById = (id) => {
    const jsonData = fs.readFileSync('tarefas.json', 'utf-8');
    const tasks = JSON.parse(jsonData);
    const idx_elemento = tasks.findIndex(task => task.id == id)

    if(idx_elemento >= 0) {
        tasks.splice(idx_elemento, 1)
        fs.writeFileSync('tarefas.json', JSON.stringify(tasks), 'utf-8');
    }
}