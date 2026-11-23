const prompt = require('prompt-sync')();
const number = Number(prompt('Enter a number? '));
for(let numbers = 0; numbers <= number; numbers++){
let squaredNumber = numbers * numbers
let cubeNumber = squaredNumber * numbers

console.log(`${numbers} ${squaredNumber} ${cubeNumber}`)
}