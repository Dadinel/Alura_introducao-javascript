var titulo = document.querySelector(".titulo");

if ( titulo !== null ) {
    console.log(titulo); //Tag + conteúdo
    console.log(titulo.textContent); //Conteúdo
    titulo.textContent = "Aparecida Nutricionista";
}

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var pesoEhValido = true;
var alturaEhValida = true;

var tdImc = paciente.querySelector(".info-imc");

if ( peso <= 0 || peso >= 1000 ) {
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc = "Peso inválido!";
}

if ( altura <= 0 || altura >= 3.75 ) {
    console.log("Altura inválida!");
    alturaEhValida = false;
    tdImc = "Altura inválida!";
}

if ( alturaEhValida && pesoEhValido ) {
    var imc = peso / ( altura * altura );
    tdImc.textContent = imc;
}