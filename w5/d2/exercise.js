// Exercise 1 : Giphy API




// The request
let xml = new XMLHttpRequest();

xml.open('GET','https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My',true)

xml.send();



// The response
xml.onprogress = function () {
	console.log("Let us search please ...");
}

xml.onload = function () {
	if (xml.status === 200) {
			console.log("We found what you were looking for !")
			let theResult = xml.response
			//console.log(theResult);

			let toObject = JSON.parse(theResult);
			console.log(toObject);

	} else {
		console.log("Sorry, we have a problem")
	}
	
}



// Exercise 2 : Giphy API
/*
1. Using this part of the documention, retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
2. Console.log the Javascript Object
*/

let newRequest = new XMLHttpRequest();

newRequest.open('GET','https://api.giphy.com/v1/gifs/search?q=sun&rating=g&offset=2&limit=10&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My',true)

newRequest.send();



// The response
newRequest.onprogress = function () {
	console.log("Let us search please ...");
}

newRequest.onload = function () {
	if (xml.status === 200) {
			console.log("We found it !")
			let result = newRequest.response
			

			let toObject2 = JSON.parse(result);
			console.log(toObject2);

	} else {
		console.log("Sorry, we have a problem")
	}
	
}




