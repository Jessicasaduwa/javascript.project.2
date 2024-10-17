                        //STRING MANIPULATION FUNCTIONS
// Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString('Jessica'));

// Count characters
function countCharacters(str) {
    return str.length;
}
console.log(countCharacters('Jessica')); 

// Capitalize words
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}
console.log(capitalizeWords('this is jessica'));



                        //ARRAY FUNCTIONS
const arr = [1, 2, 3, 4, 5];

// Max and Min values in an array of numbers
function findMaximum(arr) {
    return Math.max(...arr);
}
console.log("Maximum:", findMaximum(arr));
function findMinimum(arr) {
    return Math.min(...arr);
}
console.log("Minimum:", findMinimum(arr));

// Sum of all elements in an array
function sumOfArray(arr) {
    return arr.reduce((sum, current) => sum + current, 0);
}
console.log("Sum:", sumOfArray(arr));

// Filter arrays
function filterArray(arr, condition) {
    return arr.filter(condition);
}
console.log("Filtered:", filterArray(arr, x => x > 2));




                        // MATHEMATICAL FUNCTIONS
// Calculates the factorial of a given number
function factorial(n) {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log("Factorial of 5:", factorial(5));

// Checks if a number is prime or not
function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
console.log("Is 7 prime?", isPrime(7)); 

// Generates the Fibonacci sequence up to a given number of terms
function fibonacci(n) {
    const fibSequence = [];
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        fibSequence.push(a);
        [a, b] = [b, a + b];
    }
    return fibSequence;
}
console.log("Fibonacci sequence of 5 terms:", fibonacci(5));

