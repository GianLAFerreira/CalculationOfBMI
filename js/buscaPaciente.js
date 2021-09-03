const botaoBusca = document.querySelector("#buscar-paciente")

botaoBusca.addEventListener("click", function(){

    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes")

    xhr.addEventListener("load", function(){
        const erroAPI = document.querySelector("#erro-api")
        if(xhr.status === 200){
            erroAPI.classList.add("invisivel")
            const resposta = xhr.responseText;
            const pacientes = JSON.parse(resposta); 
            console.log(pacientes)
            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente)
            })
        }else{
            erroAPI.classList.remove("invisivel")
        }
    });
    xhr.send();
});