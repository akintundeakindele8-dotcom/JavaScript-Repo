function checkPerfectNumber(number){
	let sum = 0
	for(let factor = 1; factor < number; factor++){
		if (number % factor === 0){
			sum += factor
		}
	
		if(sum === number){
			return true
		}
		else{
			return false;
		}
	}


}

console.log(checkPerfectNumber(6))