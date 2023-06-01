# SISTEMA CONVALIDAZIONE ACCESSO MAIL
Mail
- Inventiamo una lista di email a nostro piacimento;
- Chiediamo all'utente una mail;
- controlliamo che la mail inserita sia presente nella lista;
- se è presente, gli diamo il benvenuto;
- altrimenti gli diciamo che non può accedere.


# Mail - Steps

0. Prendo dal DOM gli elementi desiderati;
1. Dichiariamo un Array contenente una serie di email;
2. Controllo attraverso un ciclo di For che il value inserito dall'utente nell'input sia presente nell'Array:<br>
    **se non** è presente, avverto l'utente che non può accedere;<br>
    **altrimenti**, do il benvenuto all'utente;<br>
3. Stampo in pagina il messaggio.

# GIOCO DEI DADI
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto e poi stamparlo.

# Dice - Steps

0. Prendo dal DOM gli elementi desiderati;
1. Creo un Event Listener al bottone che generi un numero casuale da 1 a 6 per l'utente e lo stesso per la cpu;
2. Controllo quale dei due valori sia il più alto:<br>
    **se** l'utente ha generato il numero maggiore stampo il messaggio di vittoria;<br>
    **se** la cpu ha generato il numero maggiore stampo il messaggio di sconfitta;<br>
    **altrimenti** stampo il messaggio di pareggio;