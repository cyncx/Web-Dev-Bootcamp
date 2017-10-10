//strike through completed todos
$("ul").on("click", "li", function(){
	//Do this!
	$(this).toggleClass("disabled");

	//Not this!!
	/*if ($(this).css('color') === "rgb(128, 128, 128)") {
		$(this).css({
			color: "black",
			textDecoration: "none"
		})
	}
	else {
		$(this).css({
			color: "gray",
			textDecoration: "line-through"
		})
	}*/
});
$("ul").on("click", ".bin", function(e){
	var item = $(this).parent()
	item.fadeOut(500, function(){
		item.remove();
	});
	e.stopPropagation();
});
$("input[type='text']").keypress(function(e){
	if (e.which === 13) {		
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span class='check'></span>" + todoText + " <span class='bin'><i class='fa fa-trash-o'></i></span></li>");
	}
});
