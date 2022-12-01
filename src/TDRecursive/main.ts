function fibonacci(n: number): number {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

function rechercheDichotomique(
  array: number[],
  guessedNumber: number,
  a: number,
  b: number
): boolean {
  console.log(a, b);
  let m = Math.floor((a + b - 1) / 2);
  console.log(m);
  if (a >= b) {
    return false;
  } else if (a < b && guessedNumber === array[m]) {
    console.log();
    return true;
  } else if (guessedNumber < array[m]) {
    return rechercheDichotomique(array, guessedNumber, a, m);
  } else {
    return rechercheDichotomique(array, guessedNumber, m + 1, b);
  }
}

let array = [2, 5, 56, 60, 64, 68, 80];

console.log(rechercheDichotomique(array, 80, 0, array.length));
