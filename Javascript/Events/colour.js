var button = document.querySelector("button");
// var isWhite = true;
// button.addEventListener("click", function(){
// 	if (isWhite) {
// 		document.body.style.background = "skyblue";
// 		isWhite = false;
// 	}
// 	else {
// 		document.body.style.background = "white";
// 		isWhite = true;
// 	}
// });
button.addEventListener("click", function(){	
		document.body.classList.toggle("blue");		
});