function fibs(number) {
  const sequence = [];

  for (let i = 0; i < number; i++) {
    if (i === 0) {
      sequence.push(0);
    } else if (i === 1) {
      sequence.push(1);
    } else {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
  }

  return sequence;
}

console.log(fibs(8));
