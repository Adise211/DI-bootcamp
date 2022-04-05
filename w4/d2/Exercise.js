// Exercise 1:  Find The Sum
//Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.
const sum = (a,b) => {console.log(a += b)};
sum(3,4);    
sum(3,10);





// Exercise 2: Kg And Grams
/* Create a function that receives a weight in kilograms and returns it in grams
1. First, use function declaration and invoke it.
2. Then, use function expression and invoke it.
3. Write in a one line comment, the difference between function declaration and function expression.
4. Finally, use a one line arrow function and invoke it. */

//1. Function declaration - 
function yourWeight() {

 	const aksUser = prompt("Write a number in kg:");
  	if (aksUser > 0) {
  		let gr = aksUser * 1000;
 		console.log(`${aksUser} kg is ${gr} in gr`);
 	} else {
  		alert("Not a number!")
 	}
 	

}

yourWeight();



// 2. Function expression -
let weight = function (a) {
	
	let inGr = a * 1000;
	console.log(inGr);
}

weight(5);
weight(8);



//3. The difference between function declaration and function expression - function expression is an anonymous functions. 





// Arrow function -
let putKg = (b) => {let inGr2 = b *1000; console.log(inGr2); }

putKg(37);







// Exercise 3:
/* 
1. Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
2. The function should display in the DOM a sentence like ... */


(function (children, partner, location, job) {
	console.log(`You will be a ${job} in ${location}, and married to ${partner} with ${children} kids."`);

}) (3,"Jesse","New-York","developer");







// Exercise 4:
/*
John has just signed in to your website and you want to welcome him.
1. Create a Bootstrap Navbar in your HTML file.
2. In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
3. The function should add a div in the nabvar, displaying the name of the user and his profile picture. */



(function (name) {
	const button = document.getElementsByTagName("button")[0];
	
	
	button.addEventListener("click", function() {
		const getToNav = document.getElementsByTagName("nav")[0];
	 	const createDiv = document.createElement("div");
	 
	 	getToNav.appendChild(createDiv);
		const dispaly = document.createTextNode(`User name: ${name}`);
		createDiv.appendChild(dispaly);
	})
	


}) ();











// Exercise 5 : Juice Bar

/* Part one :
1. The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

2. The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like .... */

/* Part two :
1. In the makeJuice function, create an empty array named ingredients.

2. The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

3. Create a new inner function named displayJuice that displays on the DOM a sentence like ...

4. The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope. */

//Function one
function makeJuice(size) {
 	const ingredients = [];
 	console.log(ingredients);



 	//Function two
	function addIngredients(first,second,third) {
		let toBody = document.getElementsByTagName("body")[0];
		let createDiv = document.createElement("div");
		let textIn = document.createTextNode(`The client wants a ${size} juice, containing ${first}, ${second}, and ${third}.`);
		toBody.appendChild(createDiv);
		createDiv.appendChild(textIn);


		//console.log(`The client wants a ${size} juice, containing ${first}, ${second}, and ${third}.`);
		first = "apple";
		second = "banana";
		third = "orange";
		ingredients.push(first);
		ingredients.push(second);
		ingredients.push(third);

		//Fnction three
		function displayJuice() {
			ingredients.forEach(fruite => {
				let toBody2 = document.getElementsByTagName("body")[0];
		 	 	let createDiv2 = document.createElement("div");
		 		let textIn2 = document.createTextNode(`The client wants a ${size} juice, containing ${first}, ${second}, and ${third}.`);
		 		toBody2.appendChild(createDiv2);
			  	createDiv2.appendChild(textIn2);
				//console.log(`The client wants a ${size} juice, containing ${fruite}, ${fruite}, and ${fruite}.`)
			})
		}
	 	
	 	displayJuice();  // "calling" the third function

	

	}

 	addIngredients("peach","lemon","dates");   // "calling" the second function
 	



}



makeJuice("small");         // "calling" the first function














