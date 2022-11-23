function gain(mise: number, r1: number, r2: number, r3: number): number {
  let gain = 0;
  if (r1 === 1 && r2 === 1 && r3 === 1) {
    gain = mise * 250;
  } else if (r1 === 2 && r2 === 2 && r3 === 2) {
    gain = mise * 150;
  } else if ((r1 === 1 && r2 === 1) || (r1 === 1 && r3 === 1) || (r2 === 1 && r3 === 1)) {
    gain = mise * 5;
  } else if (r1 === 1 || r2 === 1 || r3 === 1) {
    gain = mise * 2;
  } else {
    gain = 0;
  }
  return gain;
}
