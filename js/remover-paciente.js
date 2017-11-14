var tabela = document.querySelector("#tabela-pacientes")

tabela.addEventListener("dblclick",function(event) {
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode;

    paiDoAlvo.classList.add("fadeOut");

    setTimeout(function() {
        paiDoAlvo.remove();
    },525);
});

/*
var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach( function(paciente) {
    paciente.addEventListener("dblclick",function(){
        this.remove();
    });
});
*/