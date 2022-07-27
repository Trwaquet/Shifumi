let userChoice1 = document.getElementById('rock');
let userChoice2 = document.getElementById('paper');
let userChoice3 = document.getElementById('scissor');
let userChoice4 = document.getElementById('lezard');
let userChoice5 = document.getElementById('spock')

/* La variable "computerChoice" permet a Ordis de choisir un nombre random. 
Le "if" représente les choix en fonction du nombre choisi. */

let computerChoice = Math.random();

if (computerChoice < 0.20)
{
    computerChoice = "rock";
}
else if(computerChoice <= 0.40)
{
    computerChoice = "paper";
}
else if(computerChoice <= 0.60)
{
    computerChoice = "scissors";
}
else if (computerChoice <= 0.80)
{
    computerChoice = "lezard";
}
else {
    computerChoice = "spock";
}

console.log(computerChoice);
console.log(userChoice1, userChoice2, userChoice3, userChoice4, userChoice5);

/* Cette fonction sert a savoir qui gagne entre l'utilisateur et Ordis.
Et entre pierre, papier, ciseaux, lezard, spock */

userChoice1('click', () => {
    
})