let n = 0;
let resultado = document.getElementById("resultado");

function addvalor(){
    let resultado = document.getElementById("resultado");
    n++;
    resultado.innerHTML = n;
}

function subvalor(){
    let resultado = document.getElementById("resultado");
    n--;
    resultado.innerHTML = n;
}

function resetar(){
    let resultado = document.getElementById("resultado");
    n = 0;
    resultado.innerHTML = n;
}