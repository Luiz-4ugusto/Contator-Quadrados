// --0
var numero = 0;
function Clicar() {
    numero += 1;
    document.querySelector("#contador").innerText = numero;
}
function Menos() {
    numero -= 1;
    document.querySelector("#contador").innerText = numero;
}

// --1
var numero1 = 0;
function Clicar1() {
    numero1 += 1;
    document.querySelector("#contador1").innerText = numero1;
}
function Menos1() {
    numero1 -= 1;
    document.querySelector("#contador1").innerText = numero1;
}

// --2
var numero2 = 0;
function Clicar2() {
    numero2 += 1;
    document.querySelector("#contador2").innerText = numero2;
}
function Menos2() {
    numero2 -= 1;
    document.querySelector("#contador2").innerText = numero2;
}

// --3
var numero3 = 0;
function Clicar3() {
    numero3 += 1;
    document.querySelector("#contador3").innerText = numero3;
}
function Menos3() {
    numero3 -= 1;
    document.querySelector("#contador3").innerText = numero3;
}

// --4
var numero4 = 0;
function Clicar4() {
    numero4 += 1;
    document.querySelector("#contador4").innerText = numero4;
}
function Menos4() {
    numero4 -= 1;
    document.querySelector("#contador4").innerText = numero4;
}

// --5
var numero5 = 0;
function Clicar5() {
    numero5 += 1;
    document.querySelector("#contador5").innerText = numero5;
}
function Menos5() {
    numero5 -= 1;
    document.querySelector("#contador5").innerText = numero5;
}

// --6
var numero6 = 0;
function Clicar6() {
    numero6 += 1;
    document.querySelector("#contador6").innerText = numero6;
}
function Menos6() {
    numero6 -= 1;
    document.querySelector("#contador6").innerText = numero6;
}

// --7
var numero7 = 0;
function Clicar7() {
    numero7 += 1;
    document.querySelector("#contador7").innerText = numero7;
}
function Menos7() {
    numero7 -= 1;
    document.querySelector("#contador7").innerText = numero7;
}

// --8
var numero8 = 0;
function Clicar8() {
    numero8 += 1;
    document.querySelector("#contador8").innerText = numero8;
}
function Menos8() {
    numero8 -= 1;
    document.querySelector("#contador8").innerText = numero8;
}

// --9
var numero9 = 0;
function Clicar9() {
    numero9 += 1;
    document.querySelector("#contador9").innerText = numero9;
}
function Menos9() {
    numero9 -= 1;
    document.querySelector("#contador9").innerText = numero9;
}
// --9
let index = 10; 

function adicionar() {
    let quadrados = document.querySelectorAll(".Centralizar .container");
    if (index < quadrados.length) {
        quadrados[index].style.display = "flex"; 
        index++; 
    }
}

function tirar() {
    let quadrados = document.querySelectorAll(".Centralizar .container");
    if (index > 0) {
        index--;
        quadrados[index].style.display = "none"; 
    }
}
