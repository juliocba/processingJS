let rotacaoX = 0;
let rotacaoY = 0;
let rotacaoZ = 0;

let translacaoX = 0;
let translacaoY = 0;
let translacaoZ = 0;

let escalarX = 1.5;
let escalarY = 1.5;
let escalarZ = 1.5;

const constEscalarX = 1.5;
const constEscalarY = 1.5;
const constEscalarZ = 1.5;

function rotacao() {
    rotacaoX = $('#rx').val();
    rotacaoY = $('#ry').val();
    rotacaoZ = $('#rz').val();
}

function rotacaoGrau() {
    rotacaoX = document.getElementById('angulo-select-x').value;
    rotacaoY = document.getElementById('angulo-select-y').value;
    rotacaoZ = document.getElementById('angulo-select-z').value;
}   

function translacao() {
    translacaoX = $('#tx').val();
    translacaoY = $('#ty').val();
    translacaoZ = $('#tz').val();
}

function escalar() {
    escalarX = constEscalarX + parseFloat($('#ex').val());
    escalarY = constEscalarY + parseFloat($('#ey').val());
    escalarZ = constEscalarZ + parseFloat($('#ez').val());
}