//#region
// import * as readlineSync from "readline-sync";

// const nbreSecAn = 31556952;
// const nbreSecJour = 86400;
// const nbreSecMois = 2629746;
// const annéeRéférence = 1900 * nbreSecAn;

// function nbreSecDepuisNaissance(jour1: number, mois1: number, année1: number): number {
//   // Nombre de secondes Date de naissance par rapport à l'année référence
//   let nbreJour1EnSec = (jour1 - 1) * nbreSecJour;
//   let nbreMois1EnSec = (mois1 - 1) * nbreSecMois;
//   let année1EnSec = année1 * nbreSecAn - annéeRéférence;
//   let nbreSecTotal1 = année1EnSec + nbreJour1EnSec + nbreMois1EnSec;

//   // Nombre de secondes Date d'aujourd'hui par rapport à l'année référence
//   let date = new Date();

//   let nbreJour2EnSec = (date.getDate() - 1) * nbreSecJour;
//   let nbreMois2EnSec = (date.getMonth() - 1) * nbreSecMois;
//   let année2EnSec = date.getFullYear() * nbreSecAn - annéeRéférence;
//   let nbreSecTotal2 = année2EnSec + nbreJour2EnSec + nbreMois2EnSec;

//   // Nombre de secondes depuis la naissance
//   let totalSec = nbreSecTotal2 - nbreSecTotal1;
//   return totalSec;
// }

// function main(): void {
//   console.log(
//     nbreSecDepuisNaissance(
//       Number(readlineSync.question("Jour de naissance: ")),
//       Number(readlineSync.question("Mois de naissance: ")),
//       Number(readlineSync.question("Année de naissance: "))
//     )
//   );
// }

// main();
//#endregion

import * as readlineSync from "readline-sync";

// let nom = readlineSync.question("Quel est ton nom ?");
// console.log("Ton nom est", nom);

let x = Number(readlineSync.question("Veuillre entrer un poids en Kg ?"));
let kgEnLivre = x * 2.204;
console.log("le poids en livres est de ", kgEnLivre, "livres");
