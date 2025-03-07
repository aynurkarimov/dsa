function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((high + low) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (target > arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

console.log("should be 0", binarySearch([0], 0));
console.log("should be -1", binarySearch([0], 100));
console.log("should be 2", binarySearch([1, 2, 3], 3));
console.log("should be 4", binarySearch([1, 2, 3, 4, 5], 5));
