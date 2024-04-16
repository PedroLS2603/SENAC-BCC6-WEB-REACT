const fs = require('fs');

exports.addUser = (name, email, password) => {
    //ler o arquivo
    const jsonData = fs.readFileSync('users.json', 'utf-8');
    //converter o arquivo para um json
    const users = JSON.parse(jsonData);
    //criar um novo usuário
    const newUser = {name: name, email: email, password: password};

    //adicionar o novo usuário ao json
    users.push(newUser);
    //salvar o json no arquivo
    fs.writeFileSync('users.json', JSON.stringify(users), 'utf-8');
}