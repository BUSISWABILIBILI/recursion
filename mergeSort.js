function merge(leftArray, rightArray) {
  const sortedArray = [];

  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      sortedArray.push(leftArray[leftIndex]);
      leftIndex++;
    } else {
      sortedArray.push(rightArray[rightIndex]);
      rightIndex++;
    }
  }

  return sortedArray
    .concat(leftArray.slice(leftIndex))
    .concat(rightArray.slice(rightIndex));
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);

  const leftHalf = array.slice(0, middle);
  const rightHalf = array.slice(middle);

  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  return merge(sortedLeft, sortedRight);
}

console.log(mergeSort([]));
console.log(mergeSort([73]));
console.log(mergeSort([1, 2, 3, 4, 5]));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
