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
    
    var pesoEhValido = true;
    var alturaEhValida = true;
    
    var tdImc = paciente.querySelector(".info-imc");
    
    if ( peso <= 0 || peso >= 1000 ) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
        //paciente.style.backgroundColor = "lightcoral";
    }
    
    if ( altura <= 0 || altura >= 3.75 ) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
        //paciente.style.color = "red";
    }

    if ( alturaEhValida && pesoEhValido ) {
        /*var imc = peso / ( altura * altura );
        tdImc.textContent = imc.toFixed(2); //Arredondamento*/
        tdImc.textContent = calcImc(altura,peso);
    }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click",function(event) {
    event.preventDefault();

    var form = documento.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gortuda;
    imcTd.textContent = peso / ( altura * altura );

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    //pacienteTr.appendChild(imcTd);

    var table = document.querySelector("#tabela-pacientes");

    table.appendChild(pacienteTr);
});

//Função anônima
titulo.addEventListener("click",function () { 
    console.log("Olha só, posso chamar uma função anônima.");
});

//Função nomeada
/*function mostraMensagem() {
    console.log("Olá, eu fui clicado!");
}*/

function calcImc( altura , peso ) {
    return ( peso / ( altura * altura ) ).toFixed(2); //Arredondamento
}