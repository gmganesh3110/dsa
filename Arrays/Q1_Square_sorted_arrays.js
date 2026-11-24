const squareSortedArrays = (arr) => {
  let result = new Array(arr.length).fill(0);
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let leftSquared = arr[left] * arr[left];
    let rightSquared = arr[right] * arr[right];
    if (leftSquared <= rightSquared) {
      result[right] = arr[right] * arr[right];
      right--;
    } else {
      result[right] = arr[left] * arr[left];
      left++;
    }
  }
  return result;
};

console.log(squareSortedArrays([-2, 1, 2, 3, 4, 5]));
// Time Complexity o(n);
// Space Complexity o(n);
