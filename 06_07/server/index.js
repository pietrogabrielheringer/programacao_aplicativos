const express = require('express')
const server = express()

server.use(express.json())

//Criando um CRUD(Create, Read, Update, Delete)
/* Cada função em uma rota são definidos req e res, req faz referência a requisição do cliente
(navegador, aplicação, insomnia, etc) o res é a resposta que será exibida para a solicitação 
res.status(código) o status é um número que representa o resultado de uma requisição 
como exemplo 200 que representa OK e 404 elemento não encontrado
res.status(código).json(mensagem) a mensagem é o que será exibido para o cliente*/
let usuarios = [
    { nome: 'Pietro' },
    { nome: 'Isaac' },
    { nome: 'Samara' },
    { nome: 'Queridinha' }
]

server.get("/", (req, res) => {
    //res.json("Olá mundo")
    res.send('Pietro Gabriel da queridinha')
});

server.get('/usuarios', (req, res) => { // o verbo GET usado para o READ 
    res.send(usuarios)
});

server.post('/usuarios', (req, res) => { // o verbo POST usado para o CREATE 
    const nome = req.body.nome; // Body corpo da requisição 

    let usuario = {
        nome: nome
    }

    usuarios.push(usuario)

    res.status(201).json("Usuário Cadastrado");
});


server.put('/usuarios/:index', (req, res) => { // o verbo PUT usado para o UPDATE 
    const index = req.params.index; // Params é variável passad via URL 
    const nome = req.body.nome

    let usuario = {
        nome: nome
    }
    usuarios[index] = usuario

    res.status(200).json("Usuário atualizado")
})

server.delete('/usuarios/:index', (req, res) => { // o verbo DELETE usado para o DELETE 
    const index = req.params.index;

    usuarios.splice(index, 1)

    res.status(204).json("Usuário Deletado")

})
server.listen(5000);
