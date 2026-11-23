const prompt = require('prompt-sync')();
const integer1 = Number(prompt('Enter an integer? '));
let square1 = integer1 * integer1

console.log(square1)

const integer2 = Number(prompt('Enter an integer? '));
let square2 = integer2 * integer2

console.log(square2)


let sumOfSquare = square1 + square2
let differnceOfSquare = square1 - square2
console.log(`The difference of squares is ${differnceOfSquare}`)
console.log(`The sum of squares is ${sumOfSquare}`)


