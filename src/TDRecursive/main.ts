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

function premièreLettre(mot: string): string | undefined {
  return mot[0];
}
function dernièreLettre(mot: string): string | undefined {
  return mot[mot.length - 1];
}

function palindrome(mot: string): boolean {
  if (mot.length === 1) return true;
  if (mot.length === 2) return mot[0] === mot[1];
  if (premièreLettre(mot) === dernièreLettre(mot)) {
    return palindrome(mot.slice(1, mot.length - 1));
  }
  return false;
}

function euclidAlgorithm(a: number, b: number): number {
  let r = a % b;
  if (r === 0) {
    return b;
  } else {
    return euclidAlgorithm(b, r);
  }
}

console.log(euclidAlgorithm(119, 544));
