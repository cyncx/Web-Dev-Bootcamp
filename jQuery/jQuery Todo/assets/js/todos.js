//strike through completed todos
$('li').click(function(){
	//Do this!
	$(this).toggleClass('disabled');

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
$('li span').click(function(e){
	var item = $(this).parent()
	item.fadeOut(500, function(){
		item.remove();
	});
	e.stopPropagation();
});
