

function botao() {
    document.getElementById("agradecimento").innerHTML = "Obrigado Por Clicar";
    //console.log(document.getElementById("agradecimento"))
    //alert("Obrigado Por Clicar");
}

function redirecionar() {
    window.open("https://github.com/fecastro22/aula_javascript");
    //window.location.href = "https://github.com/fecastro22/aula_javascript";
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load () {
    alert("página carregada");
}

function funcaochange(elemento){
    console.log (elemento.value);
}










/*
function soma (n1, n2){
    return n1 + n2;
}

function validaIdade(idade) {
    if (idade >= 18){
        var validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual a sua idade:");
console.log(validaIdade(idade));
*/

/*
var d = new Date();
alert(d.getMinutes());
alert(d.getHours());
alert(d.getDate());
*/

/*
var count;
for (count = 0; count <= 5; count++ ){
    alert(count);
};
*/

/*
var count = 0;
while (count < 5){
    console.log(count);
    count = count ++; 
};
*/

/*
var idade = prompt("Qual sua Idade");


if (idade >= 18){
    alert("Maior de Idade");

}else{
    alert("Menor de Idade");
};
*/


/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva",  cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/



/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);*/



//var lista = ["maça", "pêra" , "Laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista[0]);
//console.log(lista.toString());
//console.log(lista.join(" - "));


/*var nome = "Felipe Castro";
var idade = 25;
var idade2 = 10;
var frase = "Japão é o Melhor time do Mundo";
alert(nome + " tem " + idade + " anos");
alert (idade + idade2);
console.log(nome);
console.log(idade2);
console.log(frase);
alert(frase.replace("Japão", "Brasil"));*/