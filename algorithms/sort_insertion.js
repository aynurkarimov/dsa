function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }

  return arr;
}

console.log(insertionSort([0]));
console.log(insertionSort([1, 2, 3]));
console.log(insertionSort([9, 8, 5, 3, 1, 4, 7, 6, 2]));
