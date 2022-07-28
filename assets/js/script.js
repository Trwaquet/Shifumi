let button = document.querySelectorAll('input');

/* La variable "computerChoice" permet a Ordis de choisir un nombre random. 
Le "if" représente les choix en fonction du nombre choisi. */

// ordis = () => {

//     let computerChoice = Math.random();

//     if (computerChoice < 0.20)
//     {
//         computerChoice = 'rock';
//     }
//     else if(computerChoice <= 0.40)
//     {
//         computerChoice = 'paper';
//     }
//     else if(computerChoice <= 0.60)
//     {
//         computerChoice = 'scissors';
//     }
//     else if (computerChoice <= 0.80)
//     {
//         computerChoice = 'lezard';
//     }
//     else {
//         computerChoice = 'spock';
//     }
// } 


/* ----- Ce Bouton représente la Pierre ----- */

button[0].addEventListener('click', () => {
    
    let computerChoice = Math.random();

    if (computerChoice < 0.20)
    {
        computerChoice = 'rock';
    }
    else if(computerChoice <= 0.40)
    {
        computerChoice = 'paper';
    }
    else if(computerChoice <= 0.60)
    {
        computerChoice = 'scissors';
    }
    else if (computerChoice <= 0.80)
    {
        computerChoice = 'lezard';
    }
    else {
        computerChoice = 'spock';
    }

/* Cette fonction sert a savoir qui gagne entre l'utilisateur et Ordis.
Et entre pierre, papier, ciseaux, lezard, spock */

    let result = document.getElementById('resultShifumi');
    let comOrdis = document.getElementById('comOrdis')

    if (computerChoice == 'rock'){
        result.textContent = 'Égalité.';
        comOrdis.textContent = 'Je suis dans ta tête.'
    }
    else if (computerChoice == 'paper'){
        result.textContent = 'Vous avez perdu.';
        comOrdis.textContent = 'Cheh ! T\'es trop nul MDR !'
    }
    else if (computerChoice == 'scissors'){
        result.textContent = 'Vous avez gagné !';
        comOrdis.textContent = 'Nani !'
    }
    else if (computerChoice == 'lezard'){
        result.textContent = 'Vous avez gagné !';
        comOrdis.textContent = 'Nani !'
    }
    else if (computerChoice == 'spock'){
        result.textContent = 'Vous avez perdu.'
        comOrdis.textContent = 'Cheh ! T\'est trop nul MDR !'
    }

})


/* ----- Ce Bouton représente la Feuille ----- */

button[1].addEventListener('click', () => {
    
    let computerChoice = Math.random();

    if (computerChoice < 0.20)
    {
        computerChoice = 'rock';
    }
    else if(computerChoice <= 0.40)
    {
        computerChoice = 'paper';
    }
    else if(computerChoice <= 0.60)
    {
        computerChoice = 'scissors';
    }
    else if (computerChoice <= 0.80)
    {
        computerChoice = 'lezard';
    }
    else {
        computerChoice = 'spock';
    }

/* Cette fonction sert a savoir qui gagne entre l'utilisateur et Ordis.
Et entre pierre, papier, ciseaux, lezard, spock */

    let result = document.getElementById('resultShifumi');

    if (computerChoice == 'paper'){
        result.textContent = 'Égalité.';
        comOrdis.textContent = 'Je suis dans ta tête.'
    }
    else if (computerChoice == 'scissors'){
        result.textContent = 'Vous avez perdu.';
        comOrdis.textContent = 'Cheh ! T\'es trop nul MDR !'
    }
    else if (computerChoice == 'rock'){
        result.textContent = 'Vous avez gagné !';
        comOrdis.textContent = 'Nani !'
    }
    else if (computerChoice == 'lezard'){
        result.textContent = 'Vous avez perdu.';
        comOrdis.textContent = 'Cheh ! T\'es trop nul MDR !'
    }
    else if (computerChoice == 'spock'){
        result.textContent = 'Vous avez gagné !'
        comOrdis.textContent = 'Nani !'
    }

})


/* ----- Ce Bouton représente le Ciseaux ----- */

button[2].addEventListener('click', () => {
    
    let computerChoice = Math.random();

    if (computerChoice < 0.20)
    {
        computerChoice = 'rock';
    }
    else if(computerChoice <= 0.40)
    {
        computerChoice = 'paper';
    }
    else if(computerChoice <= 0.60)
    {
        computerChoice = 'scissors';
    }
    else if (computerChoice <= 0.80)
    {
        computerChoice = 'lezard';
    }
    else {
        computerChoice = 'spock';
    }

/* Cette fonction sert a savoir qui gagne entre l'utilisateur et Ordis.
Et entre pierre, papier, ciseaux, lezard, spock */

    let result = document.getElementById('resultShifumi');

    if (computerChoice == 'scissors'){
        result.textContent = 'Égalité.';
        comOrdis.textContent = 'Je suis dans ta tête.'
    }
    else if (computerChoice == 'rock'){
        result.textContent = 'Vous avez perdu.';
        comOrdis.textContent = 'Cheh ! T\'es trop nul MDR !'
    }
    else if (computerChoice == 'paper'){
        result.textContent = 'Vous avez gagné !';
        comOrdis.textContent = 'Nani !'
    }
    else if (computerChoice == 'lezard'){
        result.textContent = 'Vous avez gagné !';
        comOrdis.textContent = 'Nani !'
    }
    else if (computerChoice == 'spock'){
        result.textContent = 'Vous avez perdu.'
        comOrdis.textContent = 'Cheh ! T\es trop nul MDR !'
    }

})


/* ----- Ce Bouton représente la Feuille ----- */

button[3].addEventListener('click', () => {
    
    let computerChoice = Math.random();

    if (computerChoice < 0.20)
    {
        computerChoice = 'rock';
    }
    else if(computerChoice <= 0.40)
    {
        computerChoice = 'paper';
    }
    else if(computerChoice <= 0.60)
    {
        computerChoice = 'scissors';
    }
    else if (computerChoice <= 0.80)
    {
        computerChoice = 'lezard';
    }
    else {
        computerChoice = 'spock';
    }

/* Cette fonction sert a savoir qui gagne entre l'utilisateur et Ordis.
Et entre pierre, papier, ciseaux, lezard, spock */

    let result = document.getElementById('resultShifumi');

    if (computerChoice == 'lezard'){
        result.textContent = 'Égalité.';
        comOrdis.textContent = 'Je suis dans ta tête.'
    }
    else if (computerChoice == 'rock'){
        result.textContent = 'Vous avez perdu.';
        comOrdis.textContent = 'Cheh ! T\'es trop nul MDR !'
    }
    else if (computerChoice == 'spock'){
        result.textContent = 'Vous avez gagné !';
        comOrdis.textContent = 'Nani !'
    }
    else if (computerChoice == 'scissors'){
        result.textContent = 'Vous avez perdu.';
        comOrdis.textContent = 'Cheh ! T\'es trop nul MDR !'
    }
    else if (computerChoice == 'paper'){
        result.textContent = 'Vous avez gagné !'
        comOrdis.textContent = 'Nani !'
    }

})


/* ----- Ce Bouton représente la Feuille ----- */

button[4].addEventListener('click', () => {
    
    let computerChoice = Math.random();

    if (computerChoice < 0.20)
    {
        computerChoice = 'rock';
    }
    else if(computerChoice <= 0.40)
    {
        computerChoice = 'paper';
    }
    else if(computerChoice <= 0.60)
    {
        computerChoice = 'scissors';
    }
    else if (computerChoice <= 0.80)
    {
        computerChoice = 'lezard';
    }
    else {
        computerChoice = 'spock';
    }

/* Cette fonction sert a savoir qui gagne entre l'utilisateur et Ordis.
Et entre pierre, papier, ciseaux, lezard, spock */

    let result = document.getElementById('resultShifumi');

    if (computerChoice == 'spock'){
        result.textContent = 'Égalité.';
        comOrdis.textContent = 'Je suis dan ta tête.'
    }
    else if (computerChoice == 'lezard'){
        result.textContent = 'Vous avez perdu.';
        comOrdis.textContent = 'Cheh ! T\'es trop nul MDR !'
    }
    else if (computerChoice == 'rock'){
        result.textContent = 'Vous avez gagné !';
        comOrdis.textContent = 'Nani !'
    }
    else if (computerChoice == 'paper'){
        result.textContent = 'Vous avez perdu.';
        comOrdis.textContent = 'Cheh ! t\'es trop nul MDR !'
    }
    else if (computerChoice == 'scissors'){
        result.textContent = 'Vous avez gagné !'
        comOrdis.textContent = 'Nani !'
    }

})