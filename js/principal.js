const titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida nutricionista";


const pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {

    let paciente = pacientes[i]


    const divPeso = paciente.querySelector(".info-peso");
    const peso = divPeso.textContent;

    const divAltura = paciente.querySelector(".info-altura");
    const altura = divAltura.textContent;

    const divIMC = paciente.querySelector(".info-imc")

    let IMC = peso / (altura * altura)

    var alturaEhValida = validaAltura(altura);
    var pesoEhValido = validaPeso(peso);

    if (! pesoEhValido) {
        console.log("Peso inválido!");
        divPeso.textContent = "Peso inválido!";
        pesoEhValido = false;   
        paciente.classList.add('paciente-invalido')
    }

    if (! alturaEhValida ) {
        console.log("Altura inválida!");
        divAltura.textContent = "Altura inválida!";
        alturaEhValida = false;
        paciente.classList.add('paciente-invalido')
    }

    if (alturaEhValida && pesoEhValido) {

        var imc = calculaIMC(peso, altura)
        divIMC.textContent = imc;
        
    } else {
        divIMC.textContent = "Altura e/ou peso inválidos!"
    }

}

function validaPeso(peso){
    if((peso >= 0 && peso < 1000)) {
    return true;
}   else{
    return false;
}
}

function validaAltura(altura){
    if((altura >= 0 && altura <= 3.00) ){
    return true;
}   else{
    return false;
}
}


function calculaIMC(peso, altura) {
    let imc = 0;

    imc = peso / (altura * altura);
    return imc.toFixed(2);
}