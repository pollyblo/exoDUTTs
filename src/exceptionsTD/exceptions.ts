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

function isDigit(c: string): boolean {
  return c >= "0" && c <= "9";
}

function dateToArray(date: string): string[] {
  let dateSplitted = date.split("/");
  let isEverythingDigit = true;

  for (let i = 0; i < dateSplitted.length; i++) {
    for (let j = 0; j < dateSplitted[i].length; j++) {
      isEverythingDigit = isDigit(dateSplitted[i][j]);
      console.log(isEverythingDigit);
    }
  }

  if (dateSplitted.length !== 3) {
    throw new FormattedDateError("La date n'est pas bien formatée");
  }
  return dateSplitted;
}

console.log(dateToArray("2a/02/2000"));
