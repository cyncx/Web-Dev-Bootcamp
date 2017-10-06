$("#prompty").on("click", main);

function main(){
	var age = undefined;
	var heading = $("#heading");
	age = prompt("What is your age?");

	if (age < 0) {
		console.log("No. Your age cannot be negative!");
		heading.text("No. Your age cannot be negative!");
		age = prompt("What is your age?");
	}
	else if (age == 21) {
		console.log("Happy 21st Birthday!!");
		heading.text("Happy 21st Birthday!!");
	}
	else if (age % 2) {
		console.log("Your age is odd!");
		heading.text("Your age is odd!");
	}
	else if (age % Math.sqrt(age) === 0) {
		console.log("Perfect Square!");
		heading.text("Perfect Square!");
	}
	else if (age > 103) {
		console.log("Fuck you're old!");
		heading.text("Fuck you're old!");
	}
	else {
		console.log("AGE: " + age);
		heading.text("AGE: " + age);
	}
}
