const express = require('express');

const app = express();

//Conexao com bd mysql
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'rebecca',
    password: '123456',
    database: 'cadastro'
});


connection.connect((err) => {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

connection.query("INSERT INTO users(nome, matricula) VALUES ('marcos', '35466-9')", (err, result) => {
    if(!err){
        console.log('Usuario cadastrado com sucesso!');
    }else {
        console.log('Erro ao cadastar usuario!');
    }
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/src/index.html");
});
app.post('/user_create', (req, res) => {
    res.send(__dirname + "/src/index.html");
});


app.listen(3000);