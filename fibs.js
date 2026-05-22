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

function fibsRec(number, sequence = [0, 1]) {
  console.log("This was printed recursively");

  if (number <= 0) return [];

  if (number === 1) return [0];

  if (sequence.length >= number) {
    return sequence.slice(0, number);
  }

  const nextNumber =
    sequence[sequence.length - 1] + sequence[sequence.length - 2];

  sequence.push(nextNumber);

  return fibsRec(number, sequence);
}

console.log("Iterative:", fibs(8));
console.log("Recursive:", fibsRec(8));
