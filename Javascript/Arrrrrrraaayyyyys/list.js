var todo = ["work","work","work","work","work","nurnurnurnur"];
var input = prompt("what would yo like to do?");

while(input !== "quit"){
	if (input === "list") {
		listTodos();				
	}
	else if (input === "new") {
		addTodo();
	}	
	else if (input === "delete") {
		delTodo();
	}
	input = prompt("what would yo like to do?");
}
console.log("Ok, You have now quit")



function listTodos() {
	console.log("----------")
	todo.forEach(function(item, index){
		console.log(index + ": " +item);
	});
	console.log("----------")
}
function addTodo() {
	var newTodo = prompt("Enter new todo");
	todo.push(newTodo);
	console.log("New todo added");
}
function delTodo() {
	var index = prompt("Enter index of todo to delete");
	todo.splice(index, 1);
	console.log("Successfully deleted!")
}