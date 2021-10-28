/*document.getElementById
document.getElementsByClassName
document.getElementsByTagName
document.querySelector*/

let element_h1 = document.getElementById('titulo');
//let elementos = document.getElementsByClassName('elementoInput');
let element_h2 = document.getElementById('subtitulo');
let input_descricao = document.getElementById('descricao');
let element_form = document.getElementById('form');
let element_caixa = document.getElementById('caixa-supresa');
let btn_visibilidade = document.getElementById('btn-mostrar');
let img = document.getElementById('img-slide');

element_h1.innerHTML = "Um novo titulo";

function alterarDescricao(){
    element_h2.innerHTML = input_descricao.value;
}

function colorir(cor){

    if(cor == "laranja"){
        element_form.style.backgroundColor = "darkorange";
    }
    else  if(cor == "azul"){
        element_form.style.backgroundColor = "blue";
    }
    else if(cor == "verde"){
        element_form.style.backgroundColor = "green";
    }
    else{
        element_form.style.backgroundColor = "dimgray";
    }
}

/*
function colorirLaranja(){
    element_form.style.backgroundColor = "darkorange";
}

function colorirAzul(){
    element_form.style.backgroundColor = "blue";
}

function colorirVerde(){
    element_form.style.backgroundColor = "green";
}*/

function animar(){
    element_form.classList.toggle('expandir');
}


function visibilidade(){
    element_caixa.classList.toggle('visibilidade');

    if(btn_visibilidade.innerHTML == "Mostrar"){
        btn_visibilidade.innerHTML = "Ocultar";
    }
    else if(btn_visibilidade.innerHTML == "Ocultar"){
        btn_visibilidade.innerHTML = "Mostrar";

    }

    
}

function trocarImg(){
    img.src = 'img/img-2.jpeg';

}

/*se flavio.idade >= 18 entao

    flavio pode votar

se nao

    flavio nao pode votar
*/