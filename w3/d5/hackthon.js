console.log("hello");

// Part 1: instruction ==> press button ==> invisible
function countDownToStart(){
	let theButton = document.getElementsByClassName("startbutton")[0];
	let theTitle = document.getElementById("instruction");
 	
	theButton.addEventListener("click", function() {
	theTitle.style.display = "none";
	})
}


countDownToStart();


// Part 2: timer counting down to play

let count = document.getElementById("count")

let newDiv = document.createElement("div")
count.appendChild(newDiv);


let classToDiv = newDiv.classList.add("countdown");
console.log(newDiv);

//newDiv.appendChild(classToDiv);



