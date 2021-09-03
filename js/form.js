
const botaoAdicionar = document.querySelector("#adicionar-paciente")

botaoAdicionar.addEventListener("click", function (event){
    event.preventDefault(); //impede o comportamento padrão do navegador
    const form = document.querySelector("#form-adiciona");
    let paciente = obtemPacienteDoFormulario(form)
    
    let erros = validaPaciente(paciente)
    if(erros.length > 0){
        exibeMensagemDeErros(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);
    
    form.reset();
    let ulLimpa = document.querySelector("#mensagem-erro");
    ulLimpa.innerHTML = ""  
});

function adicionaPacienteNaTabela(paciente) {
    let pacienteTR = montaTR(paciente);
    const tabela = document.querySelector("#tabela-pacientes"); // coloca como filho o tr dentro do tbody
    tabela.appendChild(pacienteTR);
}

function exibeMensagemDeErros(erros) {
    let ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = ""
    erros.forEach(function(erro){
        let li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    }); 
}

function obtemPacienteDoFormulario(form){
    
    let paciente ={
        nome:     form.nome.value,
        peso :    form.peso.value,
        altura:   form.altura.value,
        gordura:  form.gordura.value,
        imc:      calculaIMC(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTR(paciente){

    let pacienteTR = document.createElement("tr");
        pacienteTR.classList.add("paciente")
    pacienteTR.appendChild(montaTD(paciente.nome,    "info-nome")); //coloque como filho os td no tr 
    pacienteTR.appendChild(montaTD(paciente.peso,    "info-peso"));
    pacienteTR.appendChild(montaTD(paciente.altura,  "info-altura"));
    pacienteTR.appendChild(montaTD(paciente.gordura, "info-gordura"));
    pacienteTR.appendChild(montaTD(paciente.imc,     "info-imc"));

    return pacienteTR;
}

function montaTD(dado,classe){
    let td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}
function validaPaciente(paciente){
    var erros = [];
    if(paciente.nome.length == 0){
        erros.push("O nome não pode estar em branco")
    }
    if(paciente.peso.length === 0){
        erros.push("O peso não pode estar em branco")
    }
    if(paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco")
    }
    if(paciente.gordura.length == 0){
        erros.push("A gordura não pode estar em branco")
    }
    if(!validaPeso(paciente.peso))     erros.push("O peso é inválido"); 
    if(!validaAltura(paciente.altura)) erros.push("A altura é inválida")
    return erros;
}