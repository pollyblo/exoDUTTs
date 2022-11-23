// #region exo 1

// function randint(inf: number, sup: number): number {
//   return Math.floor(Math.random() * (sup - inf + 1) + inf);
// }

// function nRandomNumbers(n: number): void {
//   for (let i = 0; i < n; i++) {
//     console.log(randint(-10, 10));
//   }
// }

// nRandomNumbers(5);

//#endregion

// #region exo 2
// function randint(inf: number, sup: number): number {
//   return Math.floor(Math.random() * (sup - inf + 1) + inf);
// }

// function sumOfRandomNumbers(n: number): number {
//   let sumOf = 0;
//   for (let i = 0; i < n; i++) {
//     sumOf = sumOf + randint(-10, 10);
//   }

//   return sumOf;
// }

// console.log(sumOfRandomNumbers(4));

// #endregion

//#region exo 3

// function randint(inf: number, sup: number): number {
//   return Math.floor(Math.random() * (sup - inf + 1) + inf);
// }

// function productOfRandomNumbers(n: number): number {
//   let productOf = 1;
//   for (let i = 0; i < n; i++) {
//     let randomNumber = randint(-10, 10);
//     if (randomNumber > 0) {
//       productOf = productOf * randomNumber;
//     }
//     console.log(randomNumber);
//   }
//   return productOf;
// }

// console.log(productOfRandomNumbers(4));

//#endregion

//#region exo 4

// function randint(inf: number, sup: number): number {
//   return Math.floor(Math.random() * (sup - inf + 1) + inf);
// }

// function maximumInt(n: number, a: number, b: number): boolean {
//   let maxNumber = 0;
//   if (a > b) {
//     return false;
//   } else {
//     for (let i = 0; i < n; i++) {
//       let randomNumber = randint(a, b);
//       if (randomNumber > maxNumber) {
//         maxNumber = randomNumber;
//       }
//       console.log(randomNumber);
//     }
//   }
//   console.log(maxNumber);
//   return true;
// }

// maximumInt(3, 2, 10);

//#endregion

//#region exo 5

// function afficheCarré(n: number): void {
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       process.stdin.write("0");
//     }
//     console.log();
//   }
// }

// afficheCarré(5);

// function afficheDiagonale(n: number): void {
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (i === j) {
//         process.stdin.write("X");
//       } else {
//         process.stdin.write("0");
//       }
//     }
//     console.log();
//   }
// }

// afficheDiagonale(5);

// function afficheTriangle(n: number): void {
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j <= i; j++) {
//       process.stdin.write("0");
//     }
//     console.log();
//   }
// }

// afficheTriangle(5);

// function sommeCarré(n: number): void {
//   for (let i = 0; i < n; i++) {
//     for (let j = 1; j <= i; j++) {
//       for (let k = 0; k <= n; k++) {
//         if (k ** 2 === i ** 2 + j ** 2) {
//           process.stdout.write(i + "," + j + "," + k + "\n");
//         }
//       }
//     }
//   }
// }

// sommeCarré(27);

//#endregion

//#region exo 6

// import * as readlineSync from "readline-sync";

// let number = Number(readlineSync.question("Entrez un nombre en 0 et 20 : "));

// while (number > 20 || number < 0) {
//   number = Number(readlineSync.question("Entrez un nombre en 0 et 20 : "));
// }

// console.log(number);

//#endregion

//#region exo 7

// import * as readlineSync from "readline-sync";
// let positiveInt = 0;
// let negativeInt = 0;
// let maxInt = 0;
// let minInt = 0;
// let nIncrement = 0;
// let number: number;

// function sumOfNegativeNumbers(n: number): number {
//   let sumOf = 0;
//   for (let i = 0; i < n; i++) {
//     if(n < 0) {
//     sumOf = sumOf + n;
//     }
//   }
//   return sumOf;
// }
// function sumOfPositiveNumbers(n: number): number {
//     let sumOf = 0;
//     for (let i = 0; i < n; i++) {
//       if(n > 0) {
//       sumOf = sumOf + n;
//       }
//     }
//     return sumOf;
//   }

// function meanOfPositiveNumbers(n: number): number {
//     let meanOf = 0;
//     let totalNumbers = 0;
//     for (let i = 0; i < n; i++) {
//       if(n > 0) {
//       totalNumbers++;
//       meanOf = meanOf + n;
//       }
//     }
//     return meanOf / totalNumbers;
//   }

// while ((number = Number(readlineSync.question("Entrez un nombre : "))) != 0) {
//   if (number > 0) {
//     positiveInt = positiveInt + number;
//   } else {
//     negativeInt = negativeInt + number;
//   }

//   if (number > maxInt) {
//     maxInt = number;
//   } else if (number < minInt) {
//     minInt = number;
//   }

//   nIncrement = nIncrement + 1;
// }

// let meanOfPositiveNumbers = positiveInt / nIncrement;
// let meanOfNegativeNumbers = negativeInt / nIncrement;

// console.log(
//   "Plus grand nombre",
//   maxInt,
//   "Plus petit nombre",
//   minInt,
//   "Sommes des positifs :",
//   positiveInt,
//   "Somme des négatifs : ",
//   negativeInt,
//   "Moyenne des positifs : ",
//   meanOfPositiveNumbers,
//   "Moyenne des négatifs :",
//   meanOfNegativeNumbers
// );

//#endregion

//#region exo 8

// function somme(n: number): number {
//   let stock = 0;
//   while (n != 0) {
//     stock = stock + chiffreDroit(n);
//     n = popDroit(n - chiffreDroit(n));
//   }
//   console.log(stock);
//   return stock;
// }

// function chiffreDroit(n: number): number {
//   return n % 10;
// }

// function popDroit(n: number): number {
//   return Math.floor(n / 10);
// }

// somme(11111);

//#endregion

//#region exo 9
// function mirror(n: number): void {
//   let stock = "";

//   while (n != 0) {
//     stock = stock + String(chiffreDroit(n));
//     n = popDroit(n - chiffreDroit(n));
//   }

//   console.log(stock);
// }

// function chiffreDroit(n: number): number {
//   return n % 10;
// }

// function popDroit(n: number): number {
//   return Math.floor(n / 10);
// }

// mirror(152463);
//#endregion

//#region exo 10
// import * as readlineSync from "readline-sync";

// function randint(inf: number, sup: number): number {
//   return Math.floor(Math.random() * (sup - inf + 1) + inf);
// }

// function guessNumber(maxTentative: number, min: number, max: number): void {
//   let n;
//   let tentative = 0;
//   let randomNumber = randint(min, max);

//   while (
//     (n = Number(readlineSync.question("Guess the number: "))) != randomNumber &&
//     tentative < maxTentative
//   ) {
//     if (n < randomNumber) {
//       console.log("It's more!");
//     } else {
//       console.log("It's less!");
//     }
//     tentative = tentative + 1;
//   }

//   if (n === randomNumber) {
//     console.log("GJ big head! You've scored ", maxTentative + 1 - tentative, "points! ");
//   } else {
//     console.log("I'm surry buddy... but you loose, d'you wannna try again? Well you can't. ");
//   }

//   console.log("The answer was", randomNumber);
// }

// guessNumber(10, 1, 50);

//#endregion
