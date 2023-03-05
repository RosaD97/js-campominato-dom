'use strict';

// FUNZIONI
// Crea Cella
function creaCella(elemento, classe, classeDue, valore){
    const elementoCreato = document.createElement(elemento);
    elementoCreato.classList.add(classe);
    elementoCreato.classList.add(classeDue);
    elementoCreato.innerText = valore;

    elementoCreato.addEventListener('click', function(){    
        if(!bombeGenerate.includes(valore)){
            elementoCreato.classList.add('colors');
            if(!score.includes(valore)){
                score.push(valore);
                count++;
                punteggio.innerHTML = count;
            }
        } else {
            elementoCreato.classList.add('colorsBomb');
            console.log(bombeGenerate)
            elementoCreato.removeEventListener('click', function() {});    
        }
    });
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
        bombeGenerate = generaBombe(15, 1, 81);
        for(let i = 1; i <= 81; i++){
            const cella = creaCella('div', 'cella', 'normal', i);
            appendiCella(container, cella);
        }
    } else if (scelta === 'hard'){
        bombeGenerate = generaBombe(15, 1, 49);
        for(let i = 1; i <= 49; i++){
            const cella = creaCella('div', 'cella', 'hard', i);
            appendiCella(container, cella);
        }
    } else {
        for(let i = 1; i <= 100; i++){
            bombeGenerate = generaBombe(15, 1, 100);
            const cella = creaCella('div', 'cella', 'easy', i);
            appendiCella(container, cella);
        }
    }

    container.classList.add('display');
    container.classList.remove('d-none');
}

// Genera numeri casuali da 1 a 100
function numeriACaso(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
// Funzione genera bombe
function generaBombe(num, min, max){
    const nCasuali = [];
    while(nCasuali.length <= num){
        let generati = numeriACaso(min, max);
        if(!nCasuali.includes(generati)){
            nCasuali.push(generati);
        }
    }
    return nCasuali;
}

// MAIN
const container = document.querySelector(".ms_container");
const button = document.querySelector(".ms_btn");
const punteggio = document.querySelector(".punteggio");
let count = 0;

let bombeGenerate = generaBombe();
const score = [];






// Pulsante Play
button.addEventListener('click', start);

