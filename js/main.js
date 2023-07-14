'use strict';

// FUNZIONI

// Crea Cella
function creaCella(elemento, classe, classeDue, valore) {
    const elementoCreato = document.createElement(elemento);
    elementoCreato.classList.add(classe);
    elementoCreato.classList.add(classeDue);
    elementoCreato.innerText = valore;
    let gameOver = false;

    elementoCreato.addEventListener('click', function () {
        if (!bombeGenerate.includes(valore)) {
            elementoCreato.classList.add('colors');
            if (!score.includes(valore)) {
                score.push(valore);
                count++;
                punteggio.innerHTML = count;
            }
        } else {
            elementoCreato.classList.add('colorsBomb');
            gameOver = true;
        }
        if (gameOver) {
            // Banner ritenta
            const ritenta = document.querySelector(".ritenta");
            punteggio_finale.innerHTML = count;
            // Aggiungiamo il punteggio all'array di punteggi
            all_score.push(count);
            let max_score = Math.max.apply(null, all_score);
            best_score.innerHTML = max_score;
            // Rimuoviamo classi
            bg_celle.classList.remove('ms_show');
            ritenta.classList.toggle('ms_show');
            return;
        }
    });
    return elementoCreato;
}

// Appendi Cella
function appendiCella(container, element) {
    container.append(element);
}

// Crea Difficoltà
function start() {
    // Banner difficoltà
    const banner = document.querySelector(".play_d");
    banner.classList.toggle('ms_show');

    // Banner difficoltà
    const difficolta = document.querySelector(".ms_label").value;
    const scelta = difficolta;

    // Aggiungo classe 
    bg_celle.classList.add('ms_show');

    container.innerHTML = '';

    // Resetta punteggio
    score = [];
    count = 0;
    punteggio.innerHTML = 0;


    if (scelta === 'normal') {
        bombeGenerate = generaBombe(15, 1, 81);
        for (let i = 1; i <= 81; i++) {
            const cella = creaCella('div', 'cella', 'normal', i);
            appendiCella(container, cella);
        }
    } else if (scelta === 'hard') {
        bombeGenerate = generaBombe(15, 1, 49);
        for (let i = 1; i <= 49; i++) {
            const cella = creaCella('div', 'cella', 'hard', i);
            appendiCella(container, cella);
        }
    } else {
        for (let i = 1; i <= 100; i++) {
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
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Funzione genera bombe
function generaBombe(num, min, max) {
    const nCasuali = [];
    while (nCasuali.length <= num) {
        let generati = numeriACaso(min, max);
        if (!nCasuali.includes(generati)) {
            nCasuali.push(generati);
        }
    }
    return nCasuali;
}

// MAIN
// Container
const container = document.querySelector(".ms_container");
// Pulsante inizia
const button = document.querySelector(".ms_btn_inizia");
// Pulsante play
const button_play = document.querySelector(".ms_btn_play");
// Pulsante ritenta
const button_ritenta = document.querySelector(".ms_btn_ritenta");
// Visualizzazione del punteggio
const punteggio = document.querySelector(".punteggio");
const punteggio_finale = document.querySelector(".punteggio_finale");
// Count punti
let count = 0;
// Genera bombe
let bombeGenerate = generaBombe();
// Punmteggio finale
let score = [];
// Pannello per celle
const bg_celle = document.querySelector(".bg_celle");
// Array con punteggi
const all_score = [];
// Miglior punteggio
const best_score = document.querySelector(".best_score");



// Pulsante inizia
button.addEventListener('click', function () {
    // Banner play
    const banner = document.querySelector(".play");
    banner.classList.toggle('ms_show');
    // Banner difficoltà
    const banner_two = document.querySelector(".play_d");
    banner_two.classList.remove('ms_show');
}
);

// Pulsante Play
button_play.addEventListener('click', start);

// Pulsante Ritenta
button_ritenta.addEventListener('click', function () {
    // Banner Ritenta
    const banner_ritenta = document.querySelector(".ritenta");
    banner_ritenta.classList.toggle('ms_show');
    // Banner difficoltà
    const banner = document.querySelector(".play_d");
    banner.classList.remove('ms_show');
}
);


