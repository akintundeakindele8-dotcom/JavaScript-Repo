function hammingWeight(number){
let counter = 0
let sum = 0
while(number > 0){
	let lastDigit = number % 10
	number = (number - lastDigit) / 10
if(lastDigit * 1 != 0){
	counter++
}

}

return counter
}

console.log(hammingWeight(1111))