var titulo = document.querySelector(".titulo");

if ( titulo !== null ) {
    console.log(titulo); //Tag + conteúdo
    console.log(titulo.textContent); //Conteúdo
    titulo.textContent = "Aparecida Nutricionista";
}

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);
    
    var tdImc = paciente.querySelector(".info-imc");
    
    if ( !pesoEhValido ) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
        //paciente.style.backgroundColor = "lightcoral";
    }
    
    if ( !alturaEhValida ) {
        console.log("Altura inválida!");
        tdImc = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
        //paciente.style.color = "red";
    }

    if (alturaEhValida && pesoEhValido) {
        /*var imc = peso / ( altura * altura );
        tdImc.textContent = imc.toFixed(2); //Arredondamento*/
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    }
}

function calculaImc( peso , altura ) {
    var imc = 0;

    imc = peso / ( altura * altura );

    return imc.toFixed(2);
}

function validaPeso(peso) {
    if(peso > 0 && peso < 1000) {
        return true;
    }
    else {
        return false;
    }
}

function validaAltura(altura) {
    if(altura > 0 && altura < 3.75) {
        return true;
    }
    else {
        return false;
    }
}

//Função anônima
titulo.addEventListener("click",function () { 
    console.log("Olha só, posso chamar uma função anônima.");
});

//Função nomeada
/*function mostraMensagem() {
    console.log("Olá, eu fui clicado!");
}*/