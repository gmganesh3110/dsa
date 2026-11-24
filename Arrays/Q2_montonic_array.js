const monotonicArray = (arr) => {
  if (arr.length == 1 || arr.length == 0) return true;
  let first = arr[0];
  let last = arr[arr.length - 1];
  for (let i = 1; i < arr.length - 1; i++) {
    if (first === last) {
      if (arr[i] != arr[i + 1]) return false;
    } else if (first < last) {
      if (arr[i] > arr[i + 1]) return false;
    } else {
      if (arr[i] < arr[i + 1]) return false;
    }
  }
  return true;
};

console.log(monotonicArray([1, 2, 3, 3, 4, 6]));
console.log(monotonicArray([5, 4, 3, 2, 1, 0]));
console.log(monotonicArray([1, 1, 1, 1, 1]));
console.log(monotonicArray([1, 1, 1, 1, 0, 2]));

// Time Complexity O(n)
// Space Complexity O(1)
