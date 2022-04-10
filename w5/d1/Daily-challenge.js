/*
1. Create a form with two fields (name, last name) and a submit button.
2. When you click the Send button, send the data as JSON.
3. The output should be ... */

const toFirst = document.getElementById("first").value;
const toLast = document.getElementById("last").value;




const toButton = document.getElementsByTagName("button")[0];
console.log(toButton);

toButton.addEventListener("click", function (event) {
	event.preventDefault();
	//console.log(toFirst + " " +toLast);
	let name = {
		firstname : toFirst,
		lastname : toLast
	}

	const toJson = JSON.stringify(name);

	console.log(name);
	console.log("as json: " + toJson);
	


})





