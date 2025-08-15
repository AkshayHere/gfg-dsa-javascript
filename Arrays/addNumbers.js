/**
 * Simple example to understand recursive behavior
 */

const addNumbers = () => {
    let output = 0;
    const numbers = [0, 1, 2, 3, 4, 5];
    console.log('numbers: ', numbers);
    console.log('numbers.length: ', numbers.length);
    for(i = 0; i < numbers.length; i++){
        output = output + numbers[i];
    }
    console.log('output: ', output);
}

/**
 * @param {*} numbers the array we are working on
 * @param {*} index current index of the array i am working
 * @param {*} output final return value
 * @returns 
 */
const addNumbersRecursive = (numbers, index, output) => {
    if(index < numbers.length){
        console.log('index >> : ', index);
        output = output + numbers[index];
        console.log('output: ', output);
        // index++; // This increments by 1
        // index+=1; // This increments by 1.
        ++index; // This increments by 2
        return addNumbersRecursive(numbers, index, output);
    }
    console.log('output: ', output);
    return output;
}

addNumbersRecursive([0, 1, 2, 3, 4, 5], 0, 0);