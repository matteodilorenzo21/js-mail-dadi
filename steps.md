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
