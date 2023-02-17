/*
First, we are declaring a few variables.
The apiKey will house your unique API key 
The zipCode will house your hometown's zipcode or north charleston's
*/

var apiKey = "78396c29ad814e4fb6b195344230902" 
var zipCode = "29461" //29445 is goose creek so change this unless you live there

function getWeather(){
	/*
	We are declaring the variable "apiUrl" which will consist of the API route to hit 
	from the weatherapi, along with your unique api key, and the zip code of the location of
	where we would like to receive the current weather from.

	The fetch() call which is invoked is a standard API call with JS
	*/
	zipCode = document.getElementById("zipCode").elements["zip"].value;
	var apiUrl = 'http://api.weatherapi.com/v1/current.json?key=' + apiKey + '&q=' + zipCode + '&aqi=no';

	fetch(apiUrl).then(response => {
		return response.json();
	}).then(data => {
		
		
		
		// Work with JSON data here
		// The concat variable has been declared to replace text inside of our <p> tag
		// You can continue to add on to concat variable by repeating the syntax from 
		// lines 29 and 30 to set it equal to itself plus more string content
		var concat = "Zip Code: " + zipCode + "\n"
		concat = concat + "City: " + data.location.name + "\n"
		concat = concat + "State: " + data.location.region + "\n"
		concat = concat + "Cloud: " + data.current.cloud + "\n"
		concat = concat + "Country: " + data.location.country + "\n"
		concat = concat + "Current Temperature (in F): " + data.current.temp_f + " \u00B0F" + "\n"
		concat = concat + "Feels Like Temperature (in F): " + data.current.feelslike_f + " \u00B0F" + "\n"
		concat = concat + "Wind Speed(MPH): " + data.current.wind_mph + " MPH\n" 
		concat = concat + "Enter a new zip and press the button again for more weather!\n"
		
		
		// set <p> tag text to be equal to values returned by API call
		// recall that "weatherInformation" is the ID assigned to the <p> tag within
		// our index.html file
		document.getElementById('weatherInformation').innerText = concat
		
		// store the current temperature in a variable for easier access
		var temp = data.current.temp_f
		
		// change to RED color when its hot and blue when its cold
		if(temp > 80){
			document.body.style.backgroundColor = "#AA0000";
			//document.body.style. = "AA0000";
		}
		else if(temp < 60){
			document.body.style.backgroundColor = "#0000FF";
		}
		
		}).catch(err => {
		// we will deal with this in the SECOND PHASE of the project
		// error handling code will go here
		// we will log a console message/notify the user that the API is unavailable
	});

}

/*
Hidden extra credit option:
Try to modify lines 44 and 47 so that the ENTIRE webpage is not turned red/blue, only a portion of the page
*/