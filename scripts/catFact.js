var apiUrl = "https://catfact.ninja/fact"

fetch(apiUrl).then(response => {
	return response.json();
}).then(data => {

	var concat = "Here's your fact: " + data.fact 

	document.getElementById('catFact').innerText = concat
}).catch(err=> {

});
