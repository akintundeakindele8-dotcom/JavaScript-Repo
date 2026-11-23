const prompt = require('prompt-sync')();
let promptCounter = 1, sumOfSquare = 0, totalsumOfSquare = 0, totalDifferenceOfSquare = 0;
while(promptCounter <= 2){

	const integer = Number(prompt('Enter an integer? '));
	promptCounter += 1
	let square = integer * integer
	console.log(square)
	sumOfSquare += square
	let differnceOfSquare -=square - square
	console.log(differnceOfSquare)


}
totalsumOfSquare += sumOfSquare
//totalDifferenceOfSquare -= differnceOfSquare 

console.log(totalsumOfSquare)
//console.log(differnceOfSquare)


