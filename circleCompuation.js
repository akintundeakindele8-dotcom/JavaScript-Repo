const prompt = require('prompt-sync')();
const radiusOfCircle = Number(prompt('Enter the radius? '));
const pi = 3.142

let diameterOfCirlce = 2 * radiusOfCircle

let circumferenceOfCirlce = diameterOfCirlce * pi

let areaOfCirlce = pi * (radiusOfCircle ** 2)

console.log(`The diameter of a circle is ${diameterOfCirlce}`)
console.log(`The circumference of a circle is ${circumferenceOfCirlce}`)
console.log(`The area of a circle is ${areaOfCirlce}`)


