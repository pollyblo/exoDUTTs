import * as readlineSync from "readline-sync";

//#region exo 1
// function outputPairNumbers(n: number): number[] {
//   let numberTable = [];
//   let pairTable = [];

//   for (let i = 0; i < n; i++) {
//     numberTable[i] = Number(readlineSync.question("Entrez un nombre :"));
//   }

//   for (let j = 0; j < numberTable.length; j++) {
//     if (numberTable[j] % 2 === 0) {
//       pairTable.push(numberTable[j]);
//     }
//   }

//   return pairTable;
// }

// console.log(outputPairNumbers(6));
//#endregion

// #region exo 2
// let x = [1, 2, 3];

// function addOne(table1: number[]): number[] {
//   for (let i = 0; i < table1.length; i++) {
//     table1[i] = table1[i] + 1;
//   }

//   return table1;
// }

// function addOneCreated(table1: number[]): number[] {
//   let newArray = [];
//   for (let i = 0; i < table1.length; i++) {
//     newArray[i] = table1[i] + 1;
//   }
//   return newArray;
// }

// console.log(addOneCreated(x));
//#endregion
//#region  exo 3
// let x = [1, 25, 26, 85, 65];
// function rotation(array: number[]): number[] {
//   for (let i = 0; i < 1; i++) {
//     array.unshift(array[array.length - 1]);
//     array.pop();
//   }

//   return array;
// }

// console.log(rotation(x));

//#endregion

//#region exo 4

// function reverseArray(array: number[]): number[] {
//   array.reverse();
//   return array;
// }

// console.log(reverseArray([1, 2, 3, 4]));
//#endregion

//#region exo  5

// function randInt(lb: number, ub: number): number {
//   return Math.floor(Math.random() * (ub - lb + 1)) + lb;
// }

// function tirages(): void {
//   let storageArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// autre solution : for (let i = 0; i < n; i++) nbreTirages[randInt(1,6) + randInt(1,6)]++
//   for (let i = 0; i < 10000; i++) {
//     let sumOfTirages = randInt(1, 6) + randInt(1, 6);
//     if (sumOfTirages === 2) {
//       storageArray[0] += 1;
//     } else if (sumOfTirages === 3) {
//       storageArray[1] += 1;
//     } else if (sumOfTirages === 4) {
//       storageArray[2] += 1;
//     } else if (sumOfTirages === 5) {
//       storageArray[3] += 1;
//     } else if (sumOfTirages === 6) {
//       storageArray[4] += 1;
//     } else if (sumOfTirages === 7) {
//       storageArray[5] += 1;
//     } else if (sumOfTirages === 8) {
//       storageArray[6] += 1;
//     } else if (sumOfTirages === 9) {
//       storageArray[7] += 1;
//     } else if (sumOfTirages === 10) {
//       storageArray[8] += 1;
//     } else if (sumOfTirages === 11) {
//       storageArray[9] += 1;
//     } else if (sumOfTirages === 12) {
//       storageArray[10] += 1;
//     } else {
//       break;
//     }
//   }

//   console.log("somme = 2 : ", storageArray[0], "tirages");
//   console.log("somme = 3 : ", storageArray[1], "tirages");
//   console.log("somme = 4 : ", storageArray[2], "tirages");
//   console.log("somme = 5 : ", storageArray[3], "tirages");
//   console.log("somme = 6 : ", storageArray[4], "tirages");
//   console.log("somme = 7 : ", storageArray[5], "tirages");
//   console.log("somme = 8 : ", storageArray[6], "tirages");
//   console.log("somme = 9 : ", storageArray[7], "tirages");
//   console.log("somme = 10 : ", storageArray[8], "tirages");
//   console.log("somme = 11 : ", storageArray[9], "tirages");
//   console.log("somme = 12 : ", storageArray[10], "tirages");
// }
// console.log(tirages());
//#endregion

//#region
//TD6bis exo 1

function init(nbreLignes: number, nbreColonnes: number): boolean[][] {
  let labyrinthe: boolean[][] = [];
  for (let i = 0; i < nbreLignes; i++) {
    let ligne: boolean[] = [];
    for (let j = 0; j < nbreColonnes; j++) {
      if (i === 0 || i === nbreLignes - 1 || j === 0 || j === nbreColonnes - 1) {
        ligne.push(false);
      } else {
        ligne.push(true);
      }
    }
    labyrinthe.push(ligne);
  }

  return labyrinthe;
}

function estVide(labyrinthe: boolean[][], i: number, j: number): boolean {
  if (labyrinthe[i][j] === true) {
    return true;
  } else {
    return false;
  }
}

function estMur(labyrinthe: boolean[][], i: number, j: number): boolean {
  if (labyrinthe[i][j] === false) {
    return true;
  } else {
    return false;
  }
}

function affichage(labyrinthe: boolean[][]): void {
  for (let i = 0; i < labyrinthe.length; i++) {
    for (let j = 0; j < labyrinthe[i].length; j++) {
      if (estVide(labyrinthe, i, j)) {
        process.stdout.write(" ");
      } else if (estMur(labyrinthe, i, j)) {
        process.stdout.write("#");
      }
    }
    console.log();
  }
}

function randInt(lb: number, ub: number): number {
  return Math.floor(Math.random() * (ub - lb + 1)) + lb;
}

function placeIlots(labyrinthe: boolean[][], nbreIlots: number): void {
  for (let i = 0; i < nbreIlots; i++) {
    let r = randInt(0, labyrinthe[0].length - 1);
    let l = randInt(0, labyrinthe.length - 1);
    labyrinthe[l][r] = false;
  }
  affichage(labyrinthe);
}

function estConstructible(labyrinthe: boolean[][], i: number, j: number): boolean {
  if (
    estMur(labyrinthe, i + 1, j) ||
    estMur(labyrinthe, i - 1, j) ||
    estMur(labyrinthe, i, j + 1) ||
    estMur(labyrinthe, i, j - 1)
  ) {
    return true;
  } else {
    return false;
  }
}

affichage(init(8, 8));
console.log(estConstructible(init(8, 8), 2, 2));
