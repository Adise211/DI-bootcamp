console.log("hello");

// Part 1: instruction ==> press button ==> invisible
function pressToStart(){
	let theButton = document.getElementsByClassName("startbutton")[0];
	let theTitle = document.getElementById("instruction");
 	
	theButton.addEventListener("click", function() {
		theTitle.style.display = "none";
		countDownToStart();

	})

}


pressToStart();


// Part 2: timer counting down to play
function countDownToStart () {
	let count = document.getElementById("count")
	let newDiv = document.createElement("div")
	count.appendChild(newDiv);
	newDiv.classList.add("countdown");

	let counter = 5;
	let id = setInterval(function () {
		console.log(counter);
		newDiv.textContent = counter
		counter --
		if (counter <= -1 ) {
			clearInterval(id)
			count.style.display = "none";
			createTheText();
			createShapes();
		}

	},1000)

}



// Part 3 : the game will be displayed once the counter ends

// 3.1 create new divs inside the text section 
// 3.2 insert some tex to any div (the descrption of the forms)
// 3.3 make any describe-div draggable : 
let theDes = [
"Thanks to him we are able to ride on the bicycle",
"If you look at the sky after midnight you might see him and lots of him",
"He is the simbol of love", 
"Some kids like to drew him as a roof",
"He is very simple",
"He is the perfect shape in geometry", 
"You could see him as the borad in classes",
"His name will remind you the animal octopus"
] 

function createTheText () {
	for (let i = 0; i < 8; i ++) {
		let aside = document.getElementsByClassName("decription")[0];
	 	let addDivs = document.createElement("div"); 
	 	addDivs.textContent = theDes[i]
	 	addDivs.setAttribute("draggable","true")
	 	addDivs.classList.add("des")
	 	aside.appendChild(addDivs);
	 	addDivs.addEventListener("drag", function(e) {
	 		e.target.style.visibility = "hidden"
	 	})
	 		addDivs.addEventListener("dragend", function(e) {
	 		e.target.style.visibility = "visible"
	 	})

	
	}
}



// Part 4: the shapes that will be displayed

 let theShapes = ["n"];



function createShapes () {
	for (let s = 0; s < 8; s ++) {
		let forms = document.getElementById("forms");
		console.log(forms)
	 	let addNewDivs = document.createElement("div"); 
	 	addNewDivs.classList.add(`shape`+ `${s}`)
	 	forms.appendChild(addNewDivs);
	 	addNewDivs.setAttribute("draggable","true")
	}
}















