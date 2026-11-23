const prompt = require('prompt-sync')();
const integer = Number(prompt('Enter an integer? '));
let square =  integer * integer;
if(square > 100){
	console.log(`${square} >  100`)

}else{
	console.log(`${square} <  100`)

}if(square == 100){
	console.log(`${square} = 100`)

}else{
	console.log(`${square} is not equal to 100`)

}if(integer > 100){
	console.log(`${integar} > than 100`)

}else{
	console.log(`${integer} < than 100`)

}if(integer == 100){
	console.log(`${integer} == than 100`)

}else{
	console.log(`${integer} is not equal to  100`)


}
