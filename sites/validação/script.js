const pwd = document.getElementById("pwd");
const pwd2 = document.getElementById("pwd2");
const nasc = document.getElementById("nasc");
const idadeHTML = document.getElementById("idade");

function validate(item){

    item.setCustomValidity("");
    item.checkValidity();

    if(item == pwd2){

        if(item.value == pwd.value){

            item.setCustomValidity("");

        } else {

            item.setCustomValidity("A senha não corresponde com a primeira.");

        }

    }





    if(item == nasc){

        let hoje = new Date();

        let dnasc = new Date(nasc.value);

        let idade = hoje.getFullYear() - dnasc.getFullYear();

        let m = hoje.getMonth() - dnasc.getMonth();

        document.getElementById("idade").value = idade + " anos";

        if(m < 0 || (m === 0 && hoje.getDate() < dnasc.getDate())){

            idade--

        }

        if(idade >= 0){

            idadeHTML.value = idade + " anos";

        } else {

            idadeHTML.value = "Ainda não nascido";

        }

        if (idade < 18){

            item.setCustomValidity("Voçe precisa ser maior de 18 anos para cadastrar-se.");

        } else if (idade > 130){

            item.setCustomValidity("Voçe não deve mentir sua idade.");

        } else {

            item.setCustomValidity("");

        }

    } 

}



  pwd.addEventListener("input", function(){validate(pwd)});
pwd2.addEventListener("input", function(){validate(pwd2)});
pwd.addEventListener("invalid", function(){
    if (pwd.value === ""){
        pwd.setCustomValidity("Campo em branco");
    } else {
        pwd.setCustomValidity("Senha deve conter no minimo: 8 caracteres, uma letra miniscula, uma letra maiuscula e um numero.");}
})

nasc.addEventListener("input", function(){validate(nasc)});

