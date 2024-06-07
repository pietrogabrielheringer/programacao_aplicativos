import express from 'express'; //Importando o express 
import ParafusosController from './Controllers/parafusosController';
const parafusosController = new ParafusosController(); 
const server = express(); //Iniciando o express 

server.use(express.json());  //Configurando o json 

server.get('/', (req, res) => {
    res.status(200).json("Servidor Funcionando");
});

server.get('/parafusos',parafusosController.read);
server.listen(5000);




