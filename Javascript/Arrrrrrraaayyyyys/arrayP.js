function printReverse(array) {
	for (var i = array.length - 1; i >= 0; i--) {
		console.log(array[i]);
	}
}
function isUniform(array) {
	var firstItem = array[0];
	for (var i = 1; i < array.length; i++) {
    if (array[i] !== firstItem) {
    	console.log("false");
    	return;
    }
  }
  console.log("true"); 
}
function sumArray(array) {
	var result = 0;
	for (var i = 0; i < array.length; i++) {
    result += array[i];
  }
	console.log(result) ;
}
function max(array) {
	var max = 0;
	for (var i = 0; i < array.length; i++) {
		if (array[i] > max) {
			max = array[i];
		}
	}
	console.log(max);
}
var numbers = [1,2,3,4,5];
var allSame = [1,1,1,1,1,1,1,1,1,1]
printReverse(numbers);
sumArray(numbers);
max(numbers);
isUniform(numbers);