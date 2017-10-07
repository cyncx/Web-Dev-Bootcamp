console.log("Print all numbers between 10 and 19")
var prob1 = 10;
while(prob1 <= 19){
	console.log(prob1);
	prob1++;
}
console.log("Print all even numbers between 10 and 40")
var prob2 = 10;
while(prob2 <= 40){
	if (prob2 % 2 === 0) {
		console.log(prob2);
	}	
	prob2++;
}
console.log("Print all odd numbers between 300 and 333")
var prob3 = 300;
while(prob3 <= 333){
	if (prob3 % 2 === 1) {
		console.log(prob3);
	}	
	prob3++;
}
console.log("Print all numbers divisible by 5 AND 3 between 5 and 50")
var prob4 = 5;
while(prob4 <= 50){
	if (prob4 % 5 === 0 && prob4 % 3 === 0) {
		console.log(prob4);
	}	
	prob4++;
}
