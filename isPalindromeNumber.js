function isPalindromeNumber(number){

	while(number != 0){
		let lastDigit = number % 10
		number = (number - lastDigit) / 10
		let reversedNumber = (lastDigit * 10) 
		console.log(`${lastDigit}`)
	}	
	if (number == reversedNumber){
		return true
	}
	else{	
	return false
}	
}
	
isPalindromeNumber(123)