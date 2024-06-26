function buscaCEP(){

    let cep = document.getElementById("cep").value.replace(/\D/g,'');

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(resp => resp.json())
    .then(json => {
        for(let[campo, valor] of Object.entries(json)){
            if(document.getElementById(campo)){
            document.getElementById(campo).value = valor;
            }
        }
    })

}

document.getElementById("btncep").addEventListener("click", buscaCEP);