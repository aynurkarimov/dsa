function jumpSearch(arr, target) {
  const step = Math.sqrt(arr.length);

  let i;
  for (i = 0; i < arr.length; i += step) {
    if (arr[i] === target) {
      break;
    }
  }

  let j;
  for (j = Math.min(i - step, 0); j < Math.max(i, arr.length); j++) {
    if (arr[j] === target) {
      return j;
    }
  }

  return -1;
}

console.log("should be 1", jumpSearch([false, true, true, true], 1));
console.log("should be 3", jumpSearch([false, false, false, true], 3));
console.log("should be 0", jumpSearch([false], false));
console.log("should be -1", jumpSearch([false], true));
