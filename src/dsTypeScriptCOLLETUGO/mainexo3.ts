import * as readLineSync from "readline-sync";

function displayMenu(): number {
  console.log("1) Addition");
  console.log("2) Soustraction");

  let inputValue = Number(readLineSync.question("Entrez 1 ou 2 : "));

  return inputValue;
}

function keepAsking(): number {
  let value = displayMenu();

  while (value != 1 && value != 2) {
    console.log("Mauvaise valeur!");
    value = displayMenu(); // On redemande à l'utilisateur une bonne valeur
  }

  return value;
}

// Fonction reprise du cours pour la génération de chiffre aléatoire
function randint(inf: number, sup: number): number {
  return Math.floor(Math.random() * (sup - inf + 1) + inf);
}

function addition(): boolean {
  let numberOne = randint(5, 20); //Génération de chiffres aléatoires
  let numberTwo = randint(5, 20);

  console.log("Deux nombres sont choisis au hasard, ce sont", numberOne, "et ", numberTwo);

  let trueSum = Number(readLineSync.question("Quelle la somme de ces deux nombres ? "));

  if (trueSum != numberOne + numberTwo) {
    return false;
  } else {
    return true;
  }
}

function soustraction(): boolean {
  let numberOne = randint(25, 50);
  let numberTwo = randint(1, 25);

  console.log("Deux nombres sont choisis au hasard, ce sont", numberOne, "et ", numberTwo);

  let trueDifference = Number(
    readLineSync.question("Quelle la différence entre ces deux nombres ? ")
  );

  if (trueDifference != numberOne - numberTwo) {
    return false;
  } else {
    return true;
  }
}

// Fonction principale, qui demande le choix de l'utilisateur et prend les return des fonctions addition et soustraction afin d'afficher si l'utilisateur a correct ou non

function main(): void {
  let addOrSub = keepAsking();
  let result = false;

  if (addOrSub === 1) {
    result = addition();
  } else {
    result = soustraction();
  }

  if (result) {
    console.log("Vous avez eu correct !");
  } else {
    console.log("Vous avez eu faux, désolé...");
  }
}

console.log(main());
