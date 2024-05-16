const fs = require('fs');

exports.addUser = (user, password) => {
    //ler o arquivo
    const jsonData = fs.readFileSync('users.json', 'utf-8');
    //converter o arquivo para um json
    const users = JSON.parse(jsonData);

    const user_cadastrado = users.find(user_db => {user_db.user == user && user_db.senha == password})

    if(user_cadastrado) {
        return null
    }
    //criar um novo usuário
    const newUser = {user: user, password: password};

    //adicionar o novo usuário ao json
    users.push(newUser);
    //salvar o json no arquivo
    fs.writeFileSync('users.json', JSON.stringify(users), 'utf-8');

    return newUser
}

exports.login = (user, password) => {
    const jsonData = fs.readFileSync('users.json', 'utf-8');
    const users = JSON.parse(jsonData);
    const usuario_encontrado = users.find(user_db => user_db.user == user && user_db.senha == password)
    console.log(users[0].user, user, users[0].senha, password, usuario_encontrado)
    return usuario_encontrado
}   