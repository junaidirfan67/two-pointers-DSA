// Two Pointers:
// Two pointers is a technique where we use two indexes to move through
// an array or string. Usually one pointer starts from the beginning,
// and the other starts from the end.

// Example:
// Find two numbers in a sorted array whose sum is equal to target.

let arr = [1, 2, 3, 4, 6, 8];
let target = 10;

let left = 0;                  // first pointer
let right = arr.length - 1;    // second pointer

while (left < right) {
  let sum = arr[left] + arr[right];

  if (sum === target) {
    console.log("Pair found:", arr[left], arr[right]);
    break;
  } else if (sum < target) {
    left++;   // increase sum by moving left pointer forward
  } else {
    right--;  // decrease sum by moving right pointer backward
  }
}

// Output:
// Pair found: 2 8

//Why use two pointers?

//Instead of checking every pair, two pointers help solve the problem faster.

//Without two pointers, you might use nested loops.
//With two pointers, you can often solve it in one loop.