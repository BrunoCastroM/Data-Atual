/* 

function criaSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciaRelogio() {
    timer =  setInterval(function() {
        segundos++;
        relogio.innerHTML = criaSegundos(segundos);
    },1000);
}

iniciar.addEventListener('click', function(event) {
    clearInterval(timer);
    relogio.classList.remove('pausado');
    iniciaRelogio();
});

pausar.addEventListener('click', function(event) {
    clearInterval(timer);
    relogio.classList.add('pausado');
});

zerar.addEventListener('click', function(event) {
    clearInterval(timer);
    relogio.classList.remove('pausado');
    relogio.innerHTML = '00:00:00'
    segundos = 0;
});

*/

// Refatorando o código acima utilizando o objeto Date() de forma mais simples:
const h1 = document.querySelector('.container h1')
const data = new Date()

h1.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' })