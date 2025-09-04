/**
 * Remove duplicates from Sorted Array
 * https://www.geeksforgeeks.org/dsa/remove-duplicates-sorted-array/
 * O(n) Time and O(n) Space
 * @param {*} arr
 * @returns
 */

const removeDupes = (arr) => {
  const noDupesArray = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (!noDupesArray.has(arr[i])) {
      noDupesArray.add(arr[i]);
    }
  }

  console.log("noDupesArray.size: ", noDupesArray.size);
  return Array.from(noDupesArray);
};

const numbers = [1, 2, 2, 3, 4, 4, 4, 5, 5];
console.log("numbers: ", numbers);
const noDupesArray = removeDupes(numbers);
console.log("noDupesArray: ", noDupesArray);
console.log("noDupesArray.length: ", noDupesArray.length);

/**
 * Remove duplicates from an array
 * O(n) Time and O(1) Space
 */

const removeDupesOriginal = (arr) => {
  const arrayLength = arr.length;
  const output = [];
  for (let i = 0; i < arrayLength; i++) {
    if (arr[i] != arr[i + 1]) {
      output.push(arr[i]);
    }
  }
  return output;
};

const numbersOne = [1, 2, 2, 3, 4, 4, 4, 5, 5];
console.log("removeDupesOriginal: ", removeDupesOriginal(numbersOne));

const removeDupesRecursive = (arr, i, data) => {
  if (i > arr.length) {
    return data;
  }

  // console.log("arr[i]: ", arr[i]);
  // console.log("arr[i + 1]: ", arr[i + 1]);
  // console.log("data: ", data);

  if (arr[i] != arr[i + 1]) {
    data.push(arr[i]);
  }

  return removeDupesRecursive(arr, i + 1, data);
};

const numbersTwo = [1, 2, 2, 3, 4, 4, 4, 5, 5];
const output = removeDupesRecursive(numbersTwo, 0, []);
console.log("output: ", output);
