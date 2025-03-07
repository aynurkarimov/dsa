function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;

    for (let k = i + 1; k < arr.length; k++) {
      if (arr[k] < arr[min]) {
        min = k;
      }
    }

    if (min !== i) {
      [arr[min], arr[i]] = [arr[i], arr[min]];
    }
  }

  return arr;
}

console.log(selectionSort([0]));
console.log(selectionSort([1, 2, 3]));
console.log(selectionSort([9, 8, 5, 3, 1, 4, 7, 6, 2]));
