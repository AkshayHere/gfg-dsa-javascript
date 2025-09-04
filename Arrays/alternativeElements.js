/**
 * Alternate elements of an array
 * https://www.geeksforgeeks.org/dsa/print-alternate-elements-of-an-array/
 */

const numbers = [1, 2, 3, 4, 5, 6];


/**
 * Time Complexity: O(n), where n is the number of elements in arr[].
 * Space Complexity: O(1)
 * @param {*} num 
 * @returns 
 */
const getAlternatives = (num) => {
    const output = [];
    for(let i = 0; i < num.length; i++){
        if(i % 2 == 0){
            output.push(num[i]);
        }
    }
    console.log(output);
    return output;
}
// getAlternatives(numbers);


/**
 * Time Complexity: O(n), where n is the number of elements in arr[].
 * Space Complexity: O(n)
 * @param {*} num 
 * @param {*} i 
 * @param {*} output 
 * @returns 
 */
const getAlternativesRecursive = (num, i, output) => {
    if(i < num.length){
        if(i % 2 == 0){
            console.log("i ", i);
            console.log("num[i] ", num[i]);
            console.log("output ", output);
            output.push(num[i]);
        }
        return getAlternativesRecursive(num, i+1, output);
    }
    return output;
}

const test = getAlternativesRecursive(numbers, 0, []);
console.log("Get Alternatives with Recursive");
console.log(test);