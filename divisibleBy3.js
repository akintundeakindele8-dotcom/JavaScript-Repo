const prompt = require('prompt-sync')();
const firstInteger = Number(prompt('Enter an integer? '));
if(firstInteger % 3 == 0){
	console.log(`${firstInteger} is divisible by 3`)
}else{
	console.log(`${firstInteger} is not divisible by 3`)
}