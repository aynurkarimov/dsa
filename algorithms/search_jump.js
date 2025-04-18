function jumpSearch(arr, target) {
  const step = Math.floor(Math.sqrt(arr.length));

  let i;
  for (i = 0; i < arr.length; i += step) {
    if (arr[i] === target) {
      break;
    }
  }

  let j;
  for (j = Math.max(i - step, 0); j < Math.min(i + 1, arr.length); j++) {
    if (arr[j] === target) {
      return j;
    }
  }

  return -1;
}

console.log("should be 1", jumpSearch([false, true, true, true], true));
console.log("should be 3", jumpSearch([false, false, false, true], true));
console.log("should be 0", jumpSearch([false], false));
console.log("should be -1", jumpSearch([false], true));
console.log("should be -1", jumpSearch([], true));
console.log("should be 0", jumpSearch([true], true));
console.log("should be -1", jumpSearch([true], false));
console.log("should be 2", jumpSearch([false, false, true], true));
console.log("should be 1", jumpSearch([false, true, true], true));
console.log("should be 3", jumpSearch([false, false, false, true], true));
console.log("should be -1", jumpSearch([true, true, true], false));
console.log("should be 0", jumpSearch([true, true, true], true));
console.log(
  "should be 5",
  jumpSearch([false, false, false, false, false, true], true)
);
console.log(
  "should be 4",
  jumpSearch([false, false, false, false, true, true], true)
);
