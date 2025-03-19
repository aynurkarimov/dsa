function merge(arr, left, mid, right) {
  const tempL = Array(mid - left + 1);
  const tempR = Array(right - mid);

  for (let i = 0; i < tempL.length; i++) {
    tempL[i] = arr[left + i];
  }
  for (let i = 0; i < tempR.length; i++) {
    tempR[i] = arr[mid + 1 + i];
  }

  let i = left;
  let li = 0;
  let ri = 0;

  while (li < tempL.length && ri < tempR.length) {
    if (tempL[li] <= tempR[ri]) {
      arr[i] = tempL[li];
      li++;
    } else {
      arr[i] = tempR[ri];
      ri++;
    }

    i++;
  }

  while (li < tempL.length) {
    arr[i] = tempL[li];
    i++;
    li++;
  }

  while (ri < tempR.length) {
    arr[i] = tempR[ri];
    i++;
    ri++;
  }
}

function mergeSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) {
    return arr;
  }

  const mid = Math.floor((right + left) / 2);
  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);
  merge(arr, left, mid, right);

  return arr;
}

console.log(mergeSort([0]));
console.log(mergeSort([1, 2, 3]));
console.log(mergeSort([9, 8, 5, 3, 1, 4, 7, 6, 2]));
