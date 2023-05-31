// JS LINK RUN CHECK
console.log('JS OK!');

// Recupero gli elementi dal DOM
const playBtn = document.getElementById('play-btn');

const userResult = document.getElementById('user-dice');

const cpuResult = document.getElementById('cpu-dice');

const totalResult = document.getElementById('total-result');

playBtn.addEventListener('click', function() {

    let userThrow = Math.floor(Math.random() * 6) + 1;
    userResult.innerText = 'Hai fatto: ' + userThrow;
    let cpuThrow = Math.floor(Math.random() * 6) + 1;
    cpuResult.innerText = 'La CPU fatto: ' + cpuThrow;
    console.log(userResult, cpuResult)

    if (userThrow > cpuThrow) {
        totalResult.innerText = 'HAI VINTO!';
    } else if (userThrow < cpuThrow) {
        totalResult.innerText = 'HAI PERSO!';
    } else {
        totalResult.innerText = 'PAREGGIO!'
    }
})