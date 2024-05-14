import { Carro } from './Carro.js'

export class Concessionaria {
    constructor() {
        // Ao usar o this nós criamos ou manipulados arrays e/ou variáveis globais
        this.carros = []
        // Criando um objeto e depois adicionando na lista
        let uno = new Carro("fiat", "xxy-4502", "vermelho", 2012)
        this.carros.push(uno)

        // Criando objetos e já acrescentando ele na lista
        this.carros.push(new Carro("volkswagen", "uuu-8978", "branco", 1980))
        this.carros.push(new Carro("fiat", "xxx-2020", "branco", 2014))
        this.carros.push(new Carro("chevrolet", "pps-1420", "prata", 2023))
    }

    removerCarro(index) {
        alert(this.carros[index].marca + " Deletado")
        // o método splice altera o conteúdo de uma lista podendo adicionar enquanto remove o elemento 
        // abaixo vamos remover um elemento específico 
        this.carros.splice(index, 1)
        // index representa a posição do array e o número a quantidade de itens 
        this.carregarCarros()

    }

    carregarCarros() {
        let html = "<tr><th>Index</th><th>Marca</th><th>Placa</th><th>Cor</th><th>Ano</th><th>Deletar</th></tr>"
        for (let i = 0; i < this.carros.length; i++) {
            html += "<tr>"
            html += "<td>" + i + "</td>"
            html += "<td>" + this.carros[i].marca + "</td>"
            html += "<td>" + this.carros[i].placa + "</td>"
            html += "<td>" + this.carros[i].cor + "</td>"
            html += "<td>" + this.carros[i].ano + "</td>"
            html += '<td><button onclick="window.novaConcessionaria.removerCarro(' + i + ')">Deletar</button></td>'
            html += "</tr>"
        }
        document.getElementById("listaCarros").innerHTML = html
    }

    cadastrarCarro() {
        let marca = document.getElementById("marca").value
        let placa = document.getElementById("placa").value
        let cor = document.getElementById("cor").value
        let ano = parseInt(document.getElementById("ano").value)

        let carro = new Carro(marca, placa, cor, ano)

        this.carros.push(carro)
        alert(this.carros[this.carros.length - 1].marca + "Cadastrado com sucesso")
        this.carregarCarros()
        this.limparCampos()
    }

    limparCampos() {
        document.getElementById("marca").value = ""
        document.getElementById("placa").value = ""
        document.getElementById("cor").value = ""
        document.getElementById("ano").value = ""
    }

}