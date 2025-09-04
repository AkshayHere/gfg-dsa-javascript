/*
Check if an Array is Sorted
https://www.geeksforgeeks.org/dsa/program-check-array-sorted-not-iterative-recursive/
*/

const checkIfArraySorted = (arr) => {
  if (arr.length === 0 || arr.length === 1) {
    return true;
  }

  const currentElement = arr[0];
  console.log("currentElement: ", currentElement);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < currentElement) {
      return false;
    }
    currentElement = arr[i];
    console.log("currentElement >> ", currentElement);
  }
  console.log("currentElement: ", currentElement);
  return true;
};

const checkIfArraySortedRecursive = (array, index) => {
  console.log("checkIfArraySortedRecursive");
  console.log("index: ", index);
  if (index > array.length) {
    // this means that we reached the end of array
    return true;
  }

  let currentElement = array[index];
  console.log("currentElement: ", currentElement);
  if (array[index + 1] < currentElement) {
    return false;
  }
  //   const newIndex = index + 1;
  return checkIfArraySortedRecursive(array, index + 1);
};

const numbersTwo = [1, 2, 2, 3, 4, 4, 4, 5, 5];
// const output = checkIfArraySorted(numbersTwo);
const output = checkIfArraySortedRecursive(numbersTwo, 0);
console.log("output: ", output);
