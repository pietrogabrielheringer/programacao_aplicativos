const express = require('express')
const server = express()

server.use(express.json())

let usuarios = [
    { id: 1, nome: 'Pietro' },
    { id: 2, nome: 'Isaac' },
    { id: 3, nome: 'Samara' },
    { id: 4, nome: 'Queridinha' }
]



server.get("/", (req, res) => {
    //res.json("Olá mundo")
    res.send('Pietro Gabriel da queridinha')
});

server.get('/usuarios', (req, res) => {
    res.send(usuarios)
});

server.get('/cadastro', (req, res) => {
    const nome = req.query.nome
    const senha = req.query.senha
    res.send(nome + senha)
})

server.get('/cadastro_pessoa/:nome', (req, res) => {
    const nome = req.params.nome
    res.send(nome)
})

server.post('/usuarios', (req, res) => {
    const id = req.body.id;
    const nome = req.body.nome;

    let usuario = {
        id: id,
        nome: nome
    }

    usuarios.push(usuario)

    res.status(201).json("Usuário Cadastrado");
});

server.listen(5000);
