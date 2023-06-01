//JS LINK RUN CHECK
console.log('JS OK!');

// Prendo gli elementi dal DOM
const inputEmail = document.getElementById('input-email');

const inputBtn = document.getElementById('input-btn');

const logPlaceholder = document.getElementById('log-placeholder');

// Dichiaro un Array contenente una serie di email;
const dataBase = ['mariorossi@gmail.com', 'giorgiobianchi@gmail.com', 'carloverdi@gmail.com', 'marcomagenta@gmail.com', 'danielegialli@gmail.com', 'manuelmarroni@gmail.com'];
console.log(dataBase);

let message = 'Email non valida';

// Creo un event listener per raccogliere l'input in una variabile
inputBtn.addEventListener('click', function() {
    
    let userEmail = inputEmail.value
    
    let check = false;

    //controllo che il valore inserito dall'user sia presente nell'Array
    for(let i = 0; i < dataBase.length; i++) {

        if (userEmail === dataBase[i]) {
            check = true;
        }
    }

    if (check === true) {
        message = 'Benvenuto'
    }

    logPlaceholder.innerText = message;

})

