const prompt = require('prompt-sync')();
const firstInteger = Number(prompt('Enter an integer? '));
let firstDigit = firstInteger // 10000
let firstreminder = firstInteger % 10000
let secondDigit = firstreminder // 1000
let secondReminder = secondDigit % 1000
let thirdDigit =  secondReminder // 100
let thirdReminder = thirdDigit % 100
let fourthDigit = thirdReminder // 10
let fourthreminder = fourthDigit % 10
let fifthDigit = fourthreminder // 1

console.log(`${firstDigit} ${secondDigit} ${thirdDigit} ${fourthDigit} ${fifthDigit}`)