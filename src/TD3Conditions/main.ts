// #region exo 1

// import * as readlineSync from "readline-sync";

// let x = Number(readlineSync.question("x = "));
// let y = Number(readlineSync.question("y = "));
// let z = Number(readlineSync.question("z = "));

// function isEqual(x: number, y: number, z: number): boolean {
//   if (x === y && y === z) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function isBetween(x: number, y: number, z: number): boolean {
//   if (x < y && z > y) {
//     return true;
//   } else if (x > y && z < y) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function isEven(x: number): boolean {
//   if (x % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isEqual(x, y, z));
// console.log(isBetween(x, y, z));
// console.log(isEven(x));

// #endregion exo 1

// #region exo 2
// import * as readlineSync from "readline-sync";

// let x = Number(readlineSync.question("x = "));

// function belongTo(x: number): boolean {
//   if ((x > -1 && x <= 3) || (x >= 8 && x < Infinity)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(belongTo(x));
// #endregion

// #region exo 3

// import * as readlineSync from "readline-sync";
// let x = Number(readlineSync.question("x = "));
// let y = Number(readlineSync.question("y = "));

// function equalSign(x: number, y: number): boolean {
//   if ((x > 0 && y > 0) || (x < 0 && y < 0)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(equalSign(x, y));

// #endregion

// #region exo 4

// import * as readlineSync from "readline-sync";

// let x = Number(readlineSync.question("x = "));
// let y = Number(readlineSync.question("y = "));
// let z = Number(readlineSync.question("z = "));

// function followStatement(x: number, y: number, z: number): boolean {
//   if (x < y && y < z) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(followStatement(x, y, z));
// #endregion

// //#region exo 5

// import * as readlineSync from "readline-sync";

// let year = Number(readlineSync.question("Which year ?"));

// function bissextile(year: number): boolean {
//   if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(bissextile(year));

// #region exo 6

// import * as readlineSync from "readline-sync";

// let a = Number(readlineSync.question("a = "));
// let b = Number(readlineSync.question("b = "));
// let c = Number(readlineSync.question("c = "));
// let n = Number(readlineSync.question("n = "));

// function checkFermat(a: number, b: number, c: number, n: number): boolean {
//   if (n >= 2) {
//     let resultFermat = a ** n + b ** n;
//     if (resultFermat === c ** n) {
//       console.log("Fermat avait tort");
//       return true;
//     } else {
//       console.log("Cela ne marche pas");
//       return false;
//     }
//   } else {
//     console.log("Il me faut un exposant supérieur ou égal à 2");
//     return false;
//   }
// }

// console.log(checkFermat(a, b, c, n));
//#endregion

// #region exo 7

// import * as readlineSync from "readline-sync";

// let a = Number(readlineSync.question("Première longueur : "));
// let b = Number(readlineSync.question("Seconde longueur : "));
// let c = Number(readlineSync.question("Troisième longueur : "));

// function triangle(a: number, b: number, c: number): boolean {
//   if (a > b + c || b > a + c || c > a + b) {
//     console.log("On ne peut pas tracer de triangle");
//     return false;
//   } else {
//     console.log("On peut tracer un triangle");
//     return true;
//   }
// }

// console.log(triangle(a, b, c));

//#endregion

// #region exo 8

// import * as readlineSync from "readline-sync";

// let price = Number(readlineSync.question("Entrez un prix: "));
// let priceTTC = price * 1.196;

// function calculRemise(priceTTC: number): number {
//   if (priceTTC < 1000) {
//     return 0;
//   } else if (priceTTC >= 1000 && priceTTC < 2000) {
//     return priceTTC * 0.01;
//   } else if (priceTTC >= 2000 && priceTTC < 5000) {
//     return priceTTC * 0.02;
//   } else {
//     return priceTTC * 0.05;
//   }
// }

// console.log(
//   "Votre montant priceTTC est de",
//   priceTTC,
//   "euros et la remise qui vous est attribuée est de",
//   calculRemise(priceTTC),
//   "euros."
// );

//#endregion

// #region exo 9

// import * as readlineSync from "readline-sync";

// const date = new Date(2024, 2, 29);
// let dayToday = date.getDate();
// let monthToday = date.getMonth();
// let yearToday = date.getFullYear();

// function tomorrowDate(day: number, month: number, year: number): void {
//   if (yearToday % 4 === 0 && yearToday % 100 != 0) {
//     return console.log("Demain, nous serons le", day + 1, "/", month, "/", year, ".");
//   } else {
//     return console.log("Demain, nous serons le", day + 1, "/", month, "/", year, ".");
//   }
// }

// console.log(tomorrowDate(dayToday, monthToday, yearToday));
// #endregion

// #region exo 10

// import * as readLineSync from "readline-sync";

// let montant = Number(readLineSync.question("Entrez le montant : "));
// let sommePayée = Number(readLineSync.question("Entrez la somme payée : "));
// let montantARendre = sommePayée - montant;

// function calculPièces(montant: number, valeur: number): [number, number] {
//   let nbre = Number(readLineSync.question("Combien de pièces avez-vous ?"));

//   let nbreDePieceNeeded = Math.floor(montant / valeur);
//   let nbreDePieceGiven = 0;

//   if (nbreDePieceNeeded < nbre) {
//     nbreDePieceGiven = nbreDePieceNeeded;
//     montant = montant % nbre;
//   } else {
//     nbreDePieceGiven = nbre;
//     montant -= nbreDePieceGiven * valeur;
//   }
//   return [montant, nbreDePieceGiven];
// }

// function ARendre(montant: number): void {
//   let nbreDePieceGiven;
//   [montant, nbreDePieceGiven] = calculPièces(montant, 10);
//   [montant, nbreDePieceGiven] = calculPièces(montant, 5);
//   [montant, nbreDePieceGiven] = calculPièces(montant, 2);
//   [montant, nbreDePieceGiven] = calculPièces(montant, 1);

//   console.log(
//     calculPièces(montant, 10),
//     calculPièces(montant, 5),
//     calculPièces(montant, 2),
//     calculPièces(montant, 1)
//   );

//   return;
// }

// ARendre(montantARendre)
//#endregion

// #region exo 11

import * as readlineSync from "readline-sync";

function bissextile(year: number): boolean {
  if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
    console.log("L'année est bissextile");
    return true;
  } else {
    console.log("L'année n'est pas bissextile");
    return false;
  }
}

function calculMonth(year: number, month: number): number {
  if (month === 1) {
    if (bissextile(year)) {
      return 3;
    } else {
      return 4;
    }
  } else if (month === 2) {
    if (bissextile(year)) {
      return 6;
    } else {
      return 0;
    }
  }

  if (month === 3) {
    return 0;
  } else if (month === 4) {
    return 3;
  } else if (month === 5) {
    return 5;
  } else if (month === 6) {
    return 1;
  } else if (month === 7) {
    return 3;
  } else if (month === 8) {
    return 6;
  } else if (month === 9) {
    return 2;
  } else if (month === 10) {
    return 4;
  } else if (month === 11) {
    return 0;
  } else if (month === 12) {
    return 2;
  } else {
    return 0;
  }
}

function calculDelambre(day: number, month: number, year: string): number {
  let secularPart = Number(String(year).slice(0, 2));
  let annualPart = Number(String(year).slice(-2));
  let numberDay = day;
  let k = Math.trunc(annualPart / 4);
  let q = Math.trunc(secularPart / 4);
  let correctValueOfMonth = calculMonth(Number(year), month);

  let delambreAlgorithm =
    (k + q + annualPart + correctValueOfMonth + numberDay + 2 + 5 * secularPart) % 7;

  return delambreAlgorithm;
}

function dayToStringDay(day: number): string {
  if (day === 0) {
    return "Dimanche";
  } else if (day === 1) {
    return "Lundi";
  } else if (day === 2) {
    return "Mardi";
  } else if (day === 3) {
    return "Mercredi";
  } else if (day === 4) {
    return "Jeudi";
  } else if (day === 5) {
    return "Vendredi";
  } else if (day === 6) {
    return "Samedi";
  } else {
    return "Aucun jour n'est associé à ce chiffre";
  }
}

function calculDelambreString(day: number, month: number, year: string): void {
  console.log(dayToStringDay(calculDelambre(day, month, year)));
  return;
}

function validDate(day: number, month: number, year: number): boolean {
  if (bissextile(year) && month === 2 && day > 29) {
    return false;
  } else if (
    (month === 1 ||
      month === 3 ||
      month === 5 ||
      month === 7 ||
      month === 8 ||
      month === 10 ||
      month == 12) &&
    day > 31
  ) {
    return false;
  } else if ((month === 4 || month === 6 || month === 9 || month === 11) && day > 30) {
    return false;
  } else if (day < 0 || month < 0) {
    return false;
  } else {
    return true;
  }
}

let day = Number(readlineSync.question("Quel jour ?"));
let month = Number(readlineSync.question("Quel mois ?"));
let year = readlineSync.question("Quelle année ?");

function whichDay(day: number, month: number, year: string): void {
  let yearNumber = Number(year);
  if (validDate(day, month, yearNumber)) {
    console.log(calculDelambreString(day, month, year));
  } else {
    console.log("Ca n'existe pas...");
  }
  return;
}

console.log(whichDay(day, month, year));

//#endregion
