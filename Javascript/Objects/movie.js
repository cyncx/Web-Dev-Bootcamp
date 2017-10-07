var movieDb = [
	{
		name: "Kill Bill",
		rating: 5,
		isSeen: true
	},
	{
		name: "Drag me to hell",
		rating: 3,
		isSeen: true
	},
	{
		name: "World war Z",
		rating: 4,
		isSeen: false
	},
	{
		name: "Looper",
		rating: 4,
		isSeen: false
	},
	{
		name: "The Shawshank redemtion",
		rating: 5,
		isSeen: true
	}
];
movieDb.forEach(function(movie){
	var result = "You have ";
	if (movie.isSeen) {
		result += "watched ";
	}
	else{
		result += "not seen ";
	}
	result += "\"" + movie.name + "\" - ";
	result += movie.rating + " stars";
	console.log(result);
})