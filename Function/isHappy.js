function isHappy(number){
	for(counter = 1; counter <= 20; counter++){
		let number = String(number)
		let sum = 0;
		for(numbers of number){
			numbers = Number(numbers);
			square = numbers * numbers;
			sum = sum + square;
		}
		if (sum === 1){
			return true;
		}
		if(number === sum){
			return false;
		}
	}
}


console.log(isHappy(7))
