// Ecercise 1 : Change The Navbar
/* 
1. In the <div> above, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
2. We are going to add a new <li> to the <ul>.
# First, create a new <li> tag (use the createElement method).
# Create a new text node with “Logout” as its specified text.
# Append the text node to the newly created list node (li).
# Finally, append this updated list node to the unordered list above, using the appendChild method. */

let changeDiv = document.getElementById("navBar").setAttribute("id","socialNetworkNavigation");

let getToUl = document.body.firstElementChild.firstElementChild;
let createLi = document.createElement("li"); 

let createText = document.createTextNode("Logout");
createLi.appendChild(createText);
getToUl.appendChild(createLi);








// Exercise 2: Users 
/* 
1. In the HTML above change the name “Pete” to “Richard”.
2. Change each first name of the two <ul>'s to your name.
3. At the end of each <ul> add a <li> that says “Hey students”.
4. Delete the name Sarah from the second <ul>. */

let selectLi = document.getElementsByClassName("list")[0].lastElementChild.innerText = "Richard";

let cahngeToMyName = document.getElementsByClassName("list")[0].firstElementChild.innerText = "Adise";
let cahngeToMyName2 = document.getElementsByClassName("list")[1].firstElementChild.innerText = "Adise";



let getToList = document.getElementsByClassName("list");

for (let i = 0; i < getToList.length; i++) {
	let createNewLi = document.createElement("li"); 
	let addingNewContent = document.createTextNode("Hey students");
	createNewLi.appendChild(addingNewContent);
	getToList[i].appendChild(createNewLi);
	
}


let getToSarah = document.getElementsByClassName("list")[1].children[1];
getToSarah.remove();








// Exercise 3 : Users And Style 
/*
1. Add a “light blue” background color and some padding to the <div>.
2. Do not display the first name (John) in the list.
3. Add a border to the second name (Pete).
4. Change the font size of the whole body. */

let getThere = document.getElementsByTagName("div")[2].style.backgroundColor = "lightblue";
let getThere2 = document.getElementsByTagName("div")[2].style.padding = "30px 40px 50px 30px";

let changeLi = document.getElementsByTagName("ul")[3].firstElementChild;
changeLi.remove();

let addBorder = document.getElementsByTagName("ul")[3].lastElementChild.style.border = "3px blue solid";

let changeFont = document.body.style.fontSize = "20px";


























