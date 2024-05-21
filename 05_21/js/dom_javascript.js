// Quando a página web é carregada o navegador cria um Document Object Model (DOM)
// O DOM possui uma árvore de objetos 
document.getElementById("saudacao").innerHTML = "Boa tarde terça-feira"
// Adicionando uma saudação a uma div com id saudação 

let h1s = document.getElementsByTagName("h1").innerHTML = "Título da página" // Pegando um array com todos os elementos h1

h1s[0].innerText="Introdução"
h1s[1].innerText="SENAI Porto"

let descricao = document.getElementsByClassName("descricao") // Pegando um array com cada element com tag descrição 

for (let i = 0;i < descricao.length;i++){
    descricao[i].innerText = "Div"+i
}

function alterandoClasse(){
    let conteudo = document.getElementById("conteudo")
    conteudo.className = "alterada"
}

function adicionandoClasse(){
    let texto = document.getElementById("texto")
    texto.classList.add("vermelho")
}

function removendoClasse(){
    let texto = document.getElementById("texto")
    texto.classList.remove("vermelho")
}