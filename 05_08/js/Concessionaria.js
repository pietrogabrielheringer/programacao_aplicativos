import {Carro} from './Carro'

export class Concessionaria {
    constructor() {
        this.carros = []
    }

    removerCarro(index) {
        // o método splice altera o conteúdo de uma lista podendo adicionar enquanto remove o elemento 
        // abaixo vamos remover um elemento específico 
        this.carros.splice(index, 1)
        // index representa a posição do array e o número a quantidade de itens 
        carregarCarros()
    }

    carregarCarros() {
        let html = "<tr><th>Index</th><th>Marca</th><th>Placa</th><th>Cor</th><th>Ano</th><th>Deletar</th></tr>"
        for (let i = 0; i < carros.length; i++) {
            html += "<tr>"
            html += "<td>" + i + "</td>"
            html += "<td>" + carros[i].marca + "</td>"
            html += "<td>" + carros[i].placa + "</td>"
            html += "<td>" + carros[i].cor + "</td>"
            html += "<td>" + carros[i].ano + "</td>"
            html += '<td><button onclick="removerCarro(' + i + ')">Deletar</button></td>'
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

        carros.push(carro)
        carregarCarros()
    }

}