const fs = require('fs');

exports.addUser = (user, password) => {
    const jsonData = fs.readFileSync('users.json', 'utf-8');
    const users = JSON.parse(jsonData);

    const user_cadastrado = users.find(user_db => {user_db.user == user && user_db.senha == password})

    if(user_cadastrado) {
        return null
    }
    const newUser = {user: user, senha: password};

    users.push(newUser);
    fs.writeFileSync('users.json', JSON.stringify(users), 'utf-8');

    return newUser
}

exports.login = (user, password) => {
    const jsonData = fs.readFileSync('users.json', 'utf-8');
    const users = JSON.parse(jsonData);
    const usuario_encontrado = users.find(user_db => user_db.user == user && user_db.senha == password)

    return usuario_encontrado
}   