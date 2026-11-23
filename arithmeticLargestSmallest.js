const prompt = require('prompt-sync')();
const firstInteger = Number(prompt('Enter an integer? '));
const secondInteger = Number(prompt('Enter an integer? '));
const thirdInteger = Number(prompt('Enter an integer? '));
let maximumNumber =  firstInteger;
let sumOfNumber  =  firstInteger + secondInteger + thirdInteger
let product =  firstInteger * secondInteger * thirdInteger
let average = sumOfNumber / 3
	console.log(`The sum of the three integers is ${sumOfNumber}`)

	console.log(`The product of the three integers is ${product}`)

	console.log(`The avergage of the three integers is ${average}`)


if(thirdInteger > secondInteger && maximumNumber){
	console.log(`The maximum integer is ${thirdInteger}`)

}else if(secondInteger > thirdInteger && maximumNumber){
	console.log(`The maximum integer is ${secondInteger}`)


}else if(thirdInteger > maximumNumber ){
	console.log(`The maximum integer is ${thirdInteger}`)

}else if(secondInteger > maximumNumber ){
	console.log(`The maximum integer is ${secondInteger}`)

}else{
	console.log(`The maximum integer is ${firstInteger}`)

}if(maximumNumber < secondInteger && maximumNumber){
	console.log(`The minimum integer is ${maximumNumber}`)

}else if(secondInteger < thirdInteger && maximumNumber){
	console.log(`The minimum integer is ${secondInteger}`)


}else if(thirdInteger < maximumNumber ){
	console.log(`The minimum integer is ${thirdInteger}`)

}else if(secondInteger < maximumNumber ){
	console.log(`The minimum integer is ${secondInteger}`)

}else if(thirdInteger < maximumNumber && secondInteger){
	console.log(`The minimum integer is ${thirdInteger}`)
}

