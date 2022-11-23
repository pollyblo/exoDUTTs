function copie(array: number[]): number[] {
  let nouveau: number[] = [];
  for (let i = 0; i < array.length; i++) {
    nouveau.push(array[i]);
  }
  return nouveau;
}

let array = [0, 2, 5, 6, 8];
let array2 = [...array];

console.log(array, array2);
