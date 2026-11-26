function isPowerOfTwo(number){
	for(let count = number; ; count*=2 ){
	if(count % 2 == 0){
		return true
	}	
	else if (count / 2 == 1 ){
		return true
	}	
	else
		return false
	}
		}
}

console.log(isPowerOfTwo(1))