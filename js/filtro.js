let campoFiltro = document.querySelector("#filtro");

campoFiltro.addEventListener("input", function() {
    
   let pacientes = document.querySelectorAll(".paciente");

   if(this.value.length > 0){
       console.log("Tem algo")

    for(let i = 0; i < pacientes.length; i++) {
        let paciente = pacientes[i];
        let tdNome = paciente.querySelector(".info-nome");
        let nome = tdNome.textContent;

        let expressaoRegular = new RegExp(this.value, "i")
        if  (!expressaoRegular.test(nome)) {
            paciente.classList.add("invisivel")
        }else{
            paciente.classList.remove("invisivel")
        }
     }   
    }else{
        for(let i = 0; i < pacientes.length; i++) {
        
        let paciente = pacientes[i];
        paciente.classList.remove("invisivel")
        
    }
    }
})

