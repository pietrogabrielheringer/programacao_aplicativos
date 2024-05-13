
// A função pop remove apenas o último elemento 
/*function removerCarro(arrayCarro) {
    arrayCarro.pop()
    console.log(arrayCarro)
}*/



// Inicializando um array vazio 
let carros = []
// Criando um carro uno 
let uno = new Carro("fiat", "XXY-4502", "vermelho", 2012)
carros.push(uno) // Acrescentando o uno no array de carros

// Criando um carro fusca 
let fusca = new Carro("volkswagen", "DDS-0505", "branco", 1980)
carros.push(fusca) // Acrescentar o fusca no array de carros 

let strada = new Carro("fiat", "xxx-2020", "branco", 2014)
carros.push(strada)

let onix = new Carro("chevrolet", "pps-1420", "prata", 2023)
carros.push(onix)

console.log(carros)


function cadastrarCarro() {
    let marca = document.getElementById("marca").value
    let placa = document.getElementById("placa").value
    let cor = document.getElementById("cor").value
    let ano = parseInt(document.getElementById("ano").value)

    let carro = new Carr0(marca, placa, cor, ano)

    carros.push(carro)
    carregarCarros()
}
// removerCarro(carros)