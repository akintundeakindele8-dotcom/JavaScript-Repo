const prompt = require('prompt-sync')();
const firstInteger = Number(prompt('Enter an integer? '));
const secondInteger = Number(prompt('Enter an integer? '));

if((firstInteger * 3) % (secondInteger * 2) == 0){
	console.log(`${firstInteger} when tripled is a multiple of ${secondInteger} when doubled`)
}else{
	console.log(`${firstInteger} when tripled is a multiple of ${secondInteger} when doubled`)

}