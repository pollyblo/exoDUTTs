import { read } from "fs";
import * as readlineSync from "readline-sync";

//#region exo 1

// class NomVideError extends Error {
//   constructor(message: string) {
//     super(message); // appel du constructeur de la classe parente
//     this.name = "NomVideError";
//   }
// }

// class PrenomVideError extends Error {
//   constructor(message: string) {
//     super(message); // appel du constructeur de la classe parente
//     this.name = "PrenomVideError";
//   }
// }

// class NomEtPrenomVideError extends Error {
//   constructor(message: string) {
//     super(message); // appel du constructeur de la classe parente
//     this.name = "NomEtPrenomVideError";
//   }
// }

// function creeInitiales(nom: string, prenom: string): string {
//   if (nom.length === 0) throw new NomVideError("Le nom ne doit pas être vide");
//   else if (prenom.length === 0) throw new PrenomVideError("Le prénom ne doit pas être vide");
//   else if (nom.length == 0 && prenom.length == 0)
//     throw new NomEtPrenomVideError("Le nom et le prénom ne doivent pas être vides");
//   else return nom[0].toUpperCase() + prenom[0].toUpperCase();
// }

// let nom = readlineSync.question("Quel est votre nom ? ");
// let prenom = readlineSync.question("Quel est votre prénom ? ");

// try {
//   console.log(creeInitiales(nom, prenom));
// } catch (e) {
//   if (e instanceof NomVideError) {
//     console.log(e.message);
//   } else if (e instanceof PrenomVideError) {
//     console.log(e.message);
//   } else if (e instanceof NomEtPrenomVideError) {
//     console.log(e.message);
//   }
// }

//#endregion

//#region exo 2

class FormattedDateError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "FormattedDateError";
  }
}

class WrongIntervalError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "WrongInterval";
  }
}

function isDigit(c: string): boolean {
  return c >= "0" && c <= "9";
}

function isEverythingDigit(date: string[]): boolean {
  let isEverythingDigit = false;
  for (let i = 0; i < date.length; i++) {
    for (let j = 0; j < date[i].length; j++) {
      isEverythingDigit = isDigit(date[i][j]) ? true : false;
    }
  }
  return isEverythingDigit;
}

function isInInterval(date: string[]): boolean {
  const dateToNumber = date.map((x) => {
    return parseInt(x, 10);
  });

  if (isEverythingDigit(date)) {
    if (dateToNumber[0] >= 1 && dateToNumber[0] <= 31) {
      if (dateToNumber[1] >= 1 && dateToNumber[1] <= 12) {
        return true;
      }
    }
  }
  return false;
}

let validInput = false;
function dateToArray(date: string): string[] {
  let arrDate = date.split("/");

  if (arrDate.length !== 3 || !isEverythingDigit(arrDate)) {
    throw new FormattedDateError("La date n'est pas bien formatée");
  } else if (!isInInterval(arrDate)) {
    throw new WrongIntervalError("Les intervalles choisies ne sont pas valides");
  } else {
    validInput = true;
  }

  return arrDate;
}

do {
  let date = readlineSync.question("Quelle date sommes-nous ? ");
  try {
    console.log(dateToArray(date));
  } catch (e) {
    if (e instanceof FormattedDateError) console.log(e.message);
    else if (e instanceof WrongIntervalError) console.log(e.message);
  }
} while (validInput === false);
