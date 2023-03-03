'use strict';

// FUNZIONI
// Crea Cella
function creaCella(elemento, classe, classeDue, valore){
    const elementoCreato = document.createElement(elemento);
    elementoCreato.classList.add(classe);
    elementoCreato.classList.add(classeDue);
    elementoCreato.innerText = valore;

    elementoCreato.addEventListener('click', function(){
        elementoCreato.classList.add('colors');
        alert(valore);
    })

    return elementoCreato;
}
// Appendi Cella
function appendiCella(container, element){
    container.append(element);
}

// Crea Difficoltà
function start(){
    const difficolta = document.querySelector(".ms_label").value;
    const scelta = difficolta;
    container.innerHTML = '';
    
    if(scelta === 'normal'){
        for(let i = 1; i <= 81; i++){
            const cella = creaCella('div', 'cella', 'normal', i);
            appendiCella(container, cella);
        }
    } else if (scelta === 'hard'){
        for(let i = 1; i <= 49; i++){
            const cella = creaCella('div', 'cella', 'hard', i);
            appendiCella(container, cella);
        }
    } else {
        for(let i = 1; i <= 100; i++){
            const cella = creaCella('div', 'cella', 'easy', i);
            appendiCella(container, cella);
        }
    }

    container.classList.add('display');
    container.classList.remove('d-none'); 
}

// MAIN
const container = document.querySelector(".ms_container");
const button = document.querySelector(".ms_btn");

// Pulsante Play
button.addEventListener('click', start);

