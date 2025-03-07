function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let swapped = false;

    for (let k = 0; k < arr.length - 1 - i; k++) {
      if (arr[k] > arr[k + 1]) {
        [arr[k], arr[k + 1]] = [arr[k + 1], arr[k]];
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }

  return arr;
}

console.log(bubbleSort([0]));
console.log(bubbleSort([1, 2, 3]));
console.log(bubbleSort([9, 8, 5, 3, 1, 4, 7, 6, 2]));
