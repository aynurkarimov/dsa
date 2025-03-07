function quickSortOutOfPlace(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const left = [];
  const right = [];
  const pivot = arr.at(-1);

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }

  return [...quickSortOutOfPlace(left), pivot, ...quickSortOutOfPlace(right)];
}

function quickSortInPlaceLomuto(arr, low = 0, high = arr.length - 1) {
  if (low >= high) {
    return arr;
  }

  const partition = (arr, low, high) => {
    const pivot = arr[high];
    let swapIdx = low - 1;

    for (let i = low; i < high; i++) {
      if (arr[i] < pivot) {
        swapIdx++;
        [arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]];
      }
    }

    swapIdx++;
    [arr[high], arr[swapIdx]] = [arr[swapIdx], arr[high]];

    return swapIdx;
  };

  const pivotIdx = partition(arr, low, high);
  quickSortInPlaceLomuto(arr, low, pivotIdx - 1);
  quickSortInPlaceLomuto(arr, pivotIdx + 1, high);

  return arr;
}

function quickSortInPlaceHoare(arr, low = 0, high = arr.length - 1) {
  if (low >= high) {
    return arr;
  }

  const partition = (arr, low, high) => {
    let left = low - 1;
    let right = high + 1;
    const pivot = arr[low];

    while (true) {
      do {
        left++;
      } while (pivot > arr[left]);

      do {
        right--;
      } while (pivot < arr[right]);

      if (left >= right) {
        return right;
      }

      [arr[left], arr[right]] = [arr[right], arr[left]];
    }
  };

  const pivotIdx = partition(arr, low, high);
  quickSortInPlaceHoare(arr, low, pivotIdx);
  quickSortInPlaceHoare(arr, pivotIdx + 1, high);

  return arr;
}

console.log("Out of Place");
console.log(quickSortOutOfPlace([0]));
console.log(quickSortOutOfPlace([1, 2, 3]));
console.log(quickSortOutOfPlace([9, 8, 5, 3, 1, 4, 7, 6, 2]));

console.log("Lomuto");
console.log(quickSortInPlaceLomuto([0]));
console.log(quickSortInPlaceLomuto([1, 2, 3]));
console.log(quickSortInPlaceLomuto([9, 8, 5, 3, 1, 4, 7, 6, 2]));

console.log("Hoare");
console.log(quickSortInPlaceHoare([0]));
console.log(quickSortInPlaceHoare([1, 2, 3]));
console.log(quickSortInPlaceHoare([9, 8, 5, 3, 1, 4, 7, 6, 2]));
