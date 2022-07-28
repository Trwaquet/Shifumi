let button = document.querySelectorAll('input');
let count = 0;
/* La variable "computerChoice" permet a Ordis de choisir un nombre random. 
Le "if" représente les choix en fonction du nombre choisi. */


/* ----- Ce Bouton représente la Pierre ----- */

    button[0].addEventListener('click', () => {
    
    let computerChoice = Math.random();

    if (computerChoice < 0.20)
    {
        computerChoice = 'rock';
        document.getElementById('ordisChoiceImg').innerHTML="<img src='./assets/img/Rock 250px.png' width=220px />";
    }
    else if(computerChoice <= 0.40)
    {
        computerChoice = 'paper';
        document.getElementById('ordisChoiceImg').innerHTML="<img src='./assets/img/Paper 250px.png' width=220px />";
    }
    else if(computerChoice <= 0.60)
    {
        computerChoice = 'scissors';
        document.getElementById('ordisChoiceImg').innerHTML="<img src='./assets/img/Scissors 250px.png' width=220px />";
    }
    else if (computerChoice <= 0.80)
    {
        computerChoice = 'lezard';
        document.getElementById('ordisChoiceImg').innerHTML="<img src='./assets/img/Lezard 250px.png' width=220px />";
    }
    else {
        computerChoice = 'spock';
        document.getElementById('ordisChoiceImg').innerHTML="<img src='./assets/img/Spock 250px.png' width=220px />";
    }

/* Cette fonction sert a savoir qui gagne entre l'utilisateur et Ordis.
Et entre pierre, papier, ciseaux, lezard, spock */

    let result = document.getElementById('resultShifumi');
    let comOrdis = document.getElementById('comOrdis');
    
    document.getElementById('userChoiceImg').innerHTML="<img src='./assets/img/Rock 250px.png' width=220px />";
    
    if (computerChoice == 'rock'){
        result.textContent = 'Égalité.';
        comOrdis.textContent = 'Je suis dans ta tête.'
    }
    else if (computerChoice == 'paper'){
        result.textContent = 'Vous avez perdu.';
        comOrdis.textContent = 'Cheh ! T\'es trop nul MDR !'
        count++
        document.getElementById('countOrdis').textContent = count
    }
    else if (computerChoice == 'scissors'){
        result.textContent = 'Vous avez gagné !';
        comOrdis.textContent = 'Nani !';
        count++
        document.getElementById('countUser').textContent = count
    }
    else if (computerChoice == 'lezard'){
        result.textContent = 'Vous avez gagné !';
        comOrdis.textContent = 'Nani !'
        count++
        document.getElementById('countUser').textContent = count
    }
    else if (computerChoice == 'spock'){
        result.textContent = 'Vous avez perdu.'
        comOrdis.textContent = 'Cheh ! T\'est trop nul MDR !'
        count++
        document.getElementById('countOrdis').textContent = count
    }

    })


/* ----- Ce Bouton représente la Feuille ----- */

    button[1].addEventListener('click', () => {
    
    let computerChoice = Math.random();

    if (computerChoice < 0.20)
    {
        computerChoice = 'rock';
        document.getElementById('ordisChoiceImg').innerHTML="<img src='./assets/img/Rock 250px.png' width=220px />";
    }
    else if(computerChoice <= 0.40)
    {
        computerChoice = 'paper';
        document.getElementById('ordisChoiceImg').innerHTML="<img src='./assets/img/Paper 250px.png' width=220px />";
    }
    else if(computerChoice <= 0.60)
    {
        computerChoice = 'scissors';
        document.getElementById('ordisChoiceImg').innerHTML="<img src='./assets/img/Scissors 250px.png' width=220px />";
    }
    else if (computerChoice <= 0.80)
    {
        computerChoice = 'lezard';
        document.getElementById('ordisChoiceImg').innerHTML="<img src='./assets/img/Lezard 250px.png' width=220px />";
    }
    else {
        computerChoice = 'spock';
        document.getElementById('ordisChoiceImg').innerHTML="<img src='./assets/img/Spock 250px.png' width=220px />";
    }

/* Cette fonction sert a savoir qui gagne entre l'utilisateur et Ordis.
Et entre pierre, papier, ciseaux, lezard, spock */

    let result = document.getElementById('resultShifumi');
    document.getElementById('userChoiceImg').innerHTML="<img src='./assets/img/Paper 250px.png' width=220px />";

    if (computerChoice == 'paper'){
        result.textContent = 'Égalité.';
        comOrdis.textContent = 'Je suis dans ta tête.'
    }
    else if (computerChoice == 'scissors'){
        result.textContent = 'Vous avez perdu.';
        comOrdis.textContent = 'Cheh ! T\'es trop nul MDR !'
        count++
        document.getElementById('countOrdis').textContent = count
    }
    else if (computerChoice == 'rock'){
        result.textContent = 'Vous avez gagné !';
        comOrdis.textContent = 'Nani !'
        count++
        document.getElementById('countUser').textContent = count
    }
    else if (computerChoice == 'lezard'){
        result.textContent = 'Vous avez perdu.';
        comOrdis.textContent = 'Cheh ! T\'es trop nul MDR !'
        count++
        document.getElementById('countOrdis').textContent = count
    }
    else if (computerChoice == 'spock'){
        result.textContent = 'Vous avez gagné !'
        comOrdis.textContent = 'Nani !'
        count++
        document.getElementById('countUser').textContent = count
    }

    })


/* ----- Ce Bouton représente le Ciseaux ----- */

    button[2].addEventListener('click', () => {
    
    let computerChoice = Math.random();

    if (computerChoice < 0.20)
    {
        computerChoice = 'rock';
        document.getElementById('ordisChoiceImg').innerHTML="<img src='./assets/img/Rock 250px.png' width=220px />";
    }
    else if(computerChoice <= 0.40)
    {
        computerChoice = 'paper';
        document.getElementById('ordisChoiceImg').innerHTML="<img src='./assets/img/Paper 250px.png' width=220px />";
    }
    else if(computerChoice <= 0.60)
    {
        computerChoice = 'scissors';
        document.getElementById('ordisChoiceImg').innerHTML="<img src='./assets/img/Scissors 250px.png' width=220px />";
    }
    else if (computerChoice <= 0.80)
    {
        computerChoice = 'lezard';
        document.getElementById('ordisChoiceImg').innerHTML="<img src='./assets/img/Lezard 250px.png' width=220px />";
    }
    else {
        computerChoice = 'spock';
        document.getElementById('ordisChoiceImg').innerHTML="<img src='./assets/img/Spock 250px.png' width=220px />";
    }

/* Cette fonction sert a savoir qui gagne entre l'utilisateur et Ordis.
Et entre pierre, papier, ciseaux, lezard, spock */

    let result = document.getElementById('resultShifumi');
    document.getElementById('userChoiceImg').innerHTML="<img src='./assets/img/Scissors 250px.png' width=220px />";

    if (computerChoice == 'scissors'){
        result.textContent = 'Égalité.';
        comOrdis.textContent = 'Je suis dans ta tête.'
    }
    else if (computerChoice == 'rock'){
        result.textContent = 'Vous avez perdu.';
        comOrdis.textContent = 'Cheh ! T\'es trop nul MDR !'
        count++
        document.getElementById('countOrdis').textContent = count
    }
    else if (computerChoice == 'paper'){
        result.textContent = 'Vous avez gagné !';
        comOrdis.textContent = 'Nani !'
        count++
        document.getElementById('countUser').textContent = count
    }
    else if (computerChoice == 'lezard'){
        result.textContent = 'Vous avez gagné !';
        comOrdis.textContent = 'Nani !'
        count++
        document.getElementById('countUser').textContent = count
    }
    else if (computerChoice == 'spock'){
        result.textContent = 'Vous avez perdu.'
        comOrdis.textContent = 'Cheh ! T\es trop nul MDR !'
        count++
        document.getElementById('countOrdis').textContent = count
    }

    })


/* ----- Ce Bouton représente la Feuille ----- */

    button[3].addEventListener('click', () => {
    
    let computerChoice = Math.random();

    if (computerChoice < 0.20)
    {
        computerChoice = 'rock';
        document.getElementById('ordisChoiceImg').innerHTML="<img src='./assets/img/Rock 250px.png' width=220px />";
    }
    else if(computerChoice <= 0.40)
    {
        computerChoice = 'paper';
        document.getElementById('ordisChoiceImg').innerHTML="<img src='./assets/img/Paper 250px.png' width=220px />";
    }
    else if(computerChoice <= 0.60)
    {
        computerChoice = 'scissors';
        document.getElementById('ordisChoiceImg').innerHTML="<img src='./assets/img/Scissors 250px.png' width=220px />";
    }
    else if (computerChoice <= 0.80)
    {
        computerChoice = 'lezard';
        document.getElementById('ordisChoiceImg').innerHTML="<img src='./assets/img/Lezard 250px.png' width=220px />";
    }
    else {
        computerChoice = 'spock';
        document.getElementById('ordisChoiceImg').innerHTML="<img src='./assets/img/Spock 250px.png' width=220px />";
    }

/* Cette fonction sert a savoir qui gagne entre l'utilisateur et Ordis.
Et entre pierre, papier, ciseaux, lezard, spock */

    let result = document.getElementById('resultShifumi');
    document.getElementById('userChoiceImg').innerHTML="<img src='./assets/img/Lezard 250px.png' width=220px />";

    if (computerChoice == 'lezard'){
        result.textContent = 'Égalité.';
        comOrdis.textContent = 'Je suis dans ta tête.'
    }
    else if (computerChoice == 'rock'){
        result.textContent = 'Vous avez perdu.';
        comOrdis.textContent = 'Cheh ! T\'es trop nul MDR !'
        count++
        document.getElementById('countOrdis').textContent = count
    }
    else if (computerChoice == 'spock'){
        result.textContent = 'Vous avez gagné !';
        comOrdis.textContent = 'Nani !'
        count++
        document.getElementById('countUser').textContent = count
    }
    else if (computerChoice == 'scissors'){
        result.textContent = 'Vous avez perdu.';
        comOrdis.textContent = 'Cheh ! T\'es trop nul MDR !'
        count++
        document.getElementById('countOrdis').textContent = count
    }
    else if (computerChoice == 'paper'){
        result.textContent = 'Vous avez gagné !'
        comOrdis.textContent = 'Nani !'
        count++
        document.getElementById('countUser').textContent = count
    }

    })


/* ----- Ce Bouton représente la Feuille ----- */

    button[4].addEventListener('click', () => {
    
    let computerChoice = Math.random();

    if (computerChoice < 0.20)
    {
        computerChoice = 'rock';
        document.getElementById('ordisChoiceImg').innerHTML="<img src='./assets/img/Rock 250px.png' width=220px />";
    }
    else if(computerChoice <= 0.40)
    {
        computerChoice = 'paper';
        document.getElementById('ordisChoiceImg').innerHTML="<img src='./assets/img/Paper 250px.png' width=220px />";
    }
    else if(computerChoice <= 0.60)
    {
        computerChoice = 'scissors';
        document.getElementById('ordisChoiceImg').innerHTML="<img src='./assets/img/Scissors 250px.png' width=220px />";
    }
    else if (computerChoice <= 0.80)
    {
        computerChoice = 'lezard';
        document.getElementById('ordisChoiceImg').innerHTML="<img src='./assets/img/Lezard 250px.png' width=220px />";
    }
    else {
        computerChoice = 'spock';
        document.getElementById('ordisChoiceImg').innerHTML="<img src='./assets/img/Spock 250px.png' width=220px />";
    }

/* Cette fonction sert a savoir qui gagne entre l'utilisateur et Ordis.
Et entre pierre, papier, ciseaux, lezard, spock */

    let result = document.getElementById('resultShifumi');
    document.getElementById('userChoiceImg').innerHTML="<img src='./assets/img/Spock 250px.png' width=220px />";

    if (computerChoice == 'spock'){
        result.textContent = 'Égalité.';
        comOrdis.textContent = 'Je suis dan ta tête.'
    }
    else if (computerChoice == 'lezard'){
        result.textContent = 'Vous avez perdu.';
        comOrdis.textContent = 'Cheh ! T\'es trop nul MDR !'
        count++
        document.getElementById('countOrdis').textContent = count
    }
    else if (computerChoice == 'rock'){
        result.textContent = 'Vous avez gagné !';
        comOrdis.textContent = 'Nani !'
        count++
        document.getElementById('countUser').textContent = count
    }
    else if (computerChoice == 'paper'){
        result.textContent = 'Vous avez perdu.';
        comOrdis.textContent = 'Cheh ! t\'es trop nul MDR !'
        count++
        document.getElementById('countOrdis').textContent = count
    }
    else if (computerChoice == 'scissors'){
        result.textContent = 'Vous avez gagné !'
        comOrdis.textContent = 'Nani !'
        count++
        document.getElementById('countUser').textContent = count
    }

    })