var num = 1;
function prime(){
	do {
		for (var i=2;i<num;i++) {
			if (num % i == 0) {
				var isPrime = false;
				break;
			}
			if (num % i != 0) {
				isPrime = true;
			}
		}
		if (isPrime) $("h1").text(num);
		num++;
	} while(!isPrime)
}


