/*document.getElementById
document.getElementsByClassName
document.getElementsByTagName
document.querySelector*/

let element_h1 = document.getElementById('titulo');
let elementos = document.getElementsByClassName('elementoInput');
let element_h2 = document.getElementById('subtitulo');
let input_descricao = document.getElementById('descricao');

element_h1.innerHTML = "Um novo titulo";

function alterarDescricao(){
    element_h2.innerHTML = input_descricao.value;
}