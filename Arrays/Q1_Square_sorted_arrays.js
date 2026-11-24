const squareSortedArrays = (arr) => {
  let result = new Array(arr.length).fill(0);
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    console.log(arr[left] * arr[left], "Left");
    console.log(arr[right] * arr[right], "Right");
    if (arr[left] * arr[left] <= arr[right] * arr[right]) {
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
