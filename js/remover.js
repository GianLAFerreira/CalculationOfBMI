let escutaClick = document.querySelectorAll("table");

escutaClick.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(event){
        event.target.parentNode.classList.add("fadeOut") // altera classe
        
        setTimeout(function(){
            event.target.parentNode.remove(); // remove dps de 400ms
        },400);
    });
    
})