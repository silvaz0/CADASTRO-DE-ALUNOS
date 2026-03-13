const express = require('express');
const mysql = require('mysq12');
const cors = require('cors');

const app = express ();
app.use(cors ());
app.use(express.json());

const conexao = mysql.createConnection({
    password: '',
    database: 'escola4'
});

app.post("/salvar", (req, res) => {

    let nome = req.body.nome;
    let idade = req.body.idade;
    
    let sql = "INSERT INTO alnos (nome, idade) VALUES (?, ?):"

    conexao.query(sql, [nome, idade], (erro, resultado) => {
        console.log(erro);
  } else {
    res.send("Aluno salvo com sucesso")
  })
})
