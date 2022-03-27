/*
1. Create an array which value is the planets of the solar system.
2. For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
3. Each planet should have a different background color. (Hint: add a new class to each planet).
4. Finally append each div to the <section> in the HTML (presented below).  */






let solarSystem = ["Sun","Erth","Vanus","Mars","Neptune"];



for (let i = 0;i < solarSystem.length; i++) {

let planets = document.getElementsByClassName("listPlanets")[0];
let createDiv = document.createElement('div');
let giveClass = document.createAttribute('class');
giveClass.value = "planet";
createDiv.setAttributeNode(giveClass);
planets.appendChild(createDiv);
 
	//console.log(planets);
}




let eachInColor = document.getElementsByClassName("planet")[0].style.backgroundColor = "yellow";
let eachInColor2 = document.getElementsByClassName("planet")[1].style.backgroundColor = "blue";
let eachInColor3 = document.getElementsByClassName("planet")[2].style.backgroundColor = "red";
let eachInColor4 = document.getElementsByClassName("planet")[3].style.backgroundColor = "pink";
let eachInColor5 = document.getElementsByClassName("planet")[4].style.backgroundColor = "purple";

