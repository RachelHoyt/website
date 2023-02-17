var apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=251"
var spriteUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
fetch(apiUrl).then(response => {
	return response.json();
}).then(data => {
	var results = data.results
	for(var i = 0; i < results.length; i++){
		//console.log(results[i].name + "<img src=\"" + spirteUrl + (i+1) + ".png\"><br>")
		document.body.innerHTML += results[i].name + "<img src=\"" + spriteUrl + (i+1) + ".png\"><br>"
	}
}).catch(err => {
});