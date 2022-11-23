//#region exo 1

function tirets(chaine: string): string {
  let newChaine = "";
  for (let i = 0; i < chaine.length; i++) {
    if (chaine[i] === " ") {
      newChaine += chaine[i];
    } else if (i + 1 === chaine.length) {
      newChaine += chaine[i];
    } else {
      newChaine += chaine[i] + "-";
    }
  }
  return newChaine;
}

// console.log(tirets("tirets dans la chaine"));

//#endregion

//#region exo 2

// function palindrome(chaine: string): boolean {
//   for (let i = 0; i < chaine.length; i++) {
//     if (chaine[i] === chaine[chaine.length - (i + 1)]) {
//       console.log(chaine[i]);
//     } else {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(palindrome("nonm"));

//#endregion

//#region exo 3

// function miroir(chaine: string): void {
//   for (let i = 0; i < chaine.length; i++) {
//     process.stdout.write(chaine[chaine.length - (i + 1)]);
//   }
// }

// miroir("Bonjour");

//#endregion

// #region exo 4

// function supprimerPosition(chaine: string, indice: number): string {
// //   let newChaine = "";
//   for (let i = 0; i < chaine.length; i++) {
//     if (chaine[i] === chaine[indice]) {
//       newChaine += "";
//     } else {
//       newChaine += chaine[i];
//     }
//   }
//   return newChaine;
// }

// console.log(supprimerPosition("Ugo", 2));

//#endregion

//#region exo 5

// function insererCaractere(chaine: string, indice: number, caractere: string): string {
//   let newChaine = "";

//   if (indice > chaine.length || indice < 0) {
//     return chaine;
//   }

//   for (let i = 0; i < chaine.length; i++) {
//     if (i === indice) {
//       newChaine += caractere + chaine[i];
//     } else {
//       newChaine += chaine[i];
//     }
//   }

//   return newChaine;
// }

// console.log(insererCaractere("Ugo", 2, "h"));

//#endregion

//#region exo ADN

// function estAdn(chaine: string): boolean {
//   let newChaine = "";

//   for (let i = 0; i < chaine.length; i++) {
//     if (chaine[i] === "A" || chaine[i] === "C" || chaine[i] === "G" || chaine[i] === "T") {
//       newChaine += chaine[i];
//     } else if (chaine === "") {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   console.log(newChaine, "est une séquence ADN correcte.");
//   return true;
// }

// function transcrit(sequenceADN: string): string {
//   estAdn(sequenceADN);

//   let sequenceARN = "";

//   for (let i = 0; i < sequenceADN.length; i++) {
//     if (sequenceADN[i] === "T") {
//       sequenceARN += "U";
//     } else {
//       sequenceARN += sequenceADN[i];
//     }
//   }
//   console.log("En séquence ARN, il peut se traduire en :", sequenceARN);
//   return sequenceARN;
// }

// function baseComplementaire(chaine: string): string {
//   let newBase = "";

//   if (!estAdn(chaine)) {
//     console.log("Nope!");
//     return "";
//   }

//   for (let i = 0; i < chaine.length; i++) {
//     if (chaine[i] === "A") {
//       newBase += "T";
//     } else if (chaine[i] === "T") {
//       newBase += "A";
//     } else if (chaine[i] === "G") {
//       newBase += "C";
//     } else if (chaine[i] === "C") {
//       newBase += "G";
//     }
//   }
//   return newBase;
// }

// function sequenceComplementaireInversee(chaine: string): string {
//   let baseComp = baseComplementaire(chaine);
//   let baseInv = "";

//   for (let i = 0; i < chaine.length; i++) {
//     baseInv += baseComp[chaine.length - (1 + i)];
//   }

//   return baseInv;
// }

// function nombreOccurencesCodon(chaine: string, codon: string): number {
//   let newChaine = "";
//   let compteur = 0;
//   for (let i = 0; i < chaine.length; i = i + 3) {
//     for (let j = 0; j < 3; j++) {
//       if (chaine[i + j] === codon[j]) {
//         if (j === 2) {
//           compteur += 1;
//         }
//         continue;
//       } else {
//         break;
//       }
//     }
//   }
//   return compteur;
// }

// console.log(nombreOccurencesCodon("GCUACGGAGCUUCGGAGCACGUAG", "ACG"));

// import * as readlineSync from "readline-sync";

// let sequenceADN = readlineSync.question("Entrez une séquence ADN :");
// let codon = readlineSync.question("Entrez un codon :");

// console.log("Voici votre séquence ADN en ARN associée: ", transcrit(sequenceADN), "\n");

// console.log(
//   "Voici votre séquence complémentaire-inversée: ",
//   sequenceComplementaireInversee(sequenceADN),
//   "\n"
// );

// console.log(
//   "Le codon apparait",
//   nombreOccurencesCodon(transcrit(sequenceADN), codon),
//   "fois dans la séquence ARN.",
//   "\n"
// );
//#endregion

//#region exo parentheses

// function bienParenthesee(chaine: string): boolean {
//   let compteur = 0;

//   for (let i = 0; i < chaine.length; i++) {
//     if (chaine[i] === "(") {
//       compteur++;
//     } else if (chaine[i] === ")") {
//       compteur--;
//     } else {
//       return false;
//     }

//     if (compteur < 0) {
//       return false;
//     }
//   }

//   if (compteur === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function nbreFacteur(chaine: string): number {
//   let compteur = 0;
//   let compteurFacteur = 0;

//   if (!bienParenthesee(chaine)) {
//     return compteurFacteur;
//   }

//   for (let i = 0; i < chaine.length; i++) {
//     if (chaine[i] === "(") {
//       compteur++;
//     } else if (chaine[i] === ")") {
//       compteur--;
//     }

//     if (compteur === 0) {
//       compteurFacteur++;
//     } else {
//       continue;
//     }
//   }

//   return compteurFacteur;
// }

// function factorisation(chaine: string): string {
//   let compteur = 0;
//   let newChaine = "";

//   if (!bienParenthesee(chaine)) {
//     return newChaine;
//   }

//   for (let i = 0; i < chaine.length; i++) {
//     if (chaine[i] === "(") {
//       compteur++;
//       newChaine += chaine[i];
//     } else if (chaine[i] === ")") {
//       compteur--;
//       newChaine += chaine[i];
//     }

//     if (compteur === 0 && i != chaine.length - 1) {
//       newChaine += "*";
//     } else {
//       continue;
//     }
//   }
//   return newChaine;
// }

// console.log(factorisation("(())()(()())"));

//#endregion
