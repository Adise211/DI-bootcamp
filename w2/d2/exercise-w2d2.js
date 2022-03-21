
//exercise 1: Simple If/Else Statement
//1.Create 2 variables, x and y. Each of them should have a different numeric value.
let x = 7;
let y = 4;

//2.Write an if/else statement that checks which number is bigger.
if (x < y) {
	console.log("The biggest number: 4")
} else {
	console.log("The biggest number: 7")
};



//exercise 2: Chihuahua
//1.Create a variable called newDog where it’s value is “Chihuahua”.
let newDog = "Chihuahua";

//2.Check and display how many letters are in newDog
console.log(newDog.length);

//3.Display the newDog variable in uppercase and then in lowercase.
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());

//4.Check if the variable newDog is equal to “Chihuahua”.
if (newDog === "Chihuahua" ) {
	console.log("I love Chihuahuas, it’s my favorite dog breed");
} else {
	console.log("I dont care, I prefer cats");
}




//exercise 3: Even Or Odd
//1.Prompt the user for a number and save it to a variable.
//let user = prompt("Pick a number: ");

//2.Check whether the variable is even or odd.
/*if (user % 2 == 0) {
	console.log(`${user} is an even number`);
} else {
	console.log(`${user} is an odd number`)
};*/



//exercise 4:Group Chat
//console.log the number of users that are connected to the group chat based on the following rules:
let users = prompt(["Lea123", "Princess45", "cat&doglovers", "helooo@000"]);

/*if (users == users[""]) {
	console.log("no one is online");
} */

if (users == users[0]||users[1]||users[2]||users[3]) {
	console.log(`${users} is online`);
} else if (users == users[0]&&users[1]) {
	console.log(`${users} and ${users} are online`);	
} else if (users == users[0]&&users[2]) {
	console.log(`${users} and ${users} are online`);	
} else if (users == users[0]&&users[3]) {
	console.log(`${users} and ${users} are online`);
} else if (users == users[1]&&users[2]) {
	console.log(`${users} and ${users} are online`);
} else if (users == users[1]&&users[3]) {
	console.log(`${users} and ${users} are online`);
} else (users == users[2]&&users[3]) {
	console.log(`${users} and ${users} are online`)
}


















