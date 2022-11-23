function rotation(array: number[]): number[] {
  let arrayBis = array[0];

  for (let i = 0; i < array.length; i++) {
    array[i] = array[i + 1];
  }

  array[array.length - 1] = arrayBis;

  return array;
}
