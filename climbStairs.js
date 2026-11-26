function climbStairs(totalSteps){
let count = 0
	for(number = 1; number <= totalSteps; number++ ){
		for(number2 = number; number2 <= number; number2++){
			let sum = number + number2
			if(sum === totalSteps){
				count++
			}
		}
	}
return count
}

console.log(climbStairs(8))