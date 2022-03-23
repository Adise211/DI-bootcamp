console.log("hello");

/* exercise 1: part 1
1.Write code to remove “Greg” from the people array.

2.Write code to replace “James” to “Jason”.

3.Write code to add your name to the end of the people array.

4.Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

5.Write code to make a copy of the people array using the slice method. 

6.Write code that gives the index of “Foo”. Why does it return -1 ?

7.Create a variable called last which value is the last element of the array. */

let people = ["Greg", "Mary", "Devon", "James"]
people.shift();                //Prints: ['Mary', 'Devon', 'James']
console.log(people);

people.splice(2,1,"Jason");    //Prints:['Mary', 'Devon', 'Jason']
console.log(people);

people.push("Adise");          //Prints:['Mary', 'Devon', 'Jason', 'Adise']
console.log(people);

console.log(people.indexOf("Mary"));     // 0


let newPeople = people.splice(1,2);      //Prints: ['Devon', 'Jason']
console.log(newPeople);
console.log(people.indexOf("foo"));      // prints: -1

console.log(people.length);              //Prints: 2

let last = people[1];                    //prints: Adise
console.log(last)


/* Exercise 1: part 2
1.Using a loop, iterate through the people array and console.log each person.

2.Using a loop, iterate through the people array and exit the loop after you console.log “Jason” */


for (let i = 0; i <newPeople.length; i ++) {      //Prints: Devon , Jason
	console.log(newPeople[i])
	if (i === 1) {
		break;
	}
}



/* Exercise 2 : our Favorite Colors
1. Create an array called colors where the value is a list of your five favorite colors.
2. Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
3. Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.*/

let colors = ["black","white","purple","blue"];

for (let favorite = 0; favorite <= 0; favorite++) {

	console.log(`My 1st choice is ${colors[0]}`);          //Prints: My 1st choice is black
	console.log(`My 2nd choice is ${colors[1]}`);          //Prints: My 2nd choice is white
	console.log(`My 3rd choice is ${colors[2]}`);          //Prints: My 3rd choice is purple
	console.log(`My 4th choice is ${colors[3]}`);          //Prints: My 4th choice is blue
}



/* Exercise 3 : Repeat The Question
1. Prompt the user for a number.
2. While the number is smaller than 10 continue asking the user for a new number. */




/* Exercise 4 : Building Management
1. Copy and paste this object to your Javascript file.
2. Console.log the number of floors in the building.

3. Console.log how many apartments are on the floors 1 and 3.

4. Console.log the name of the second tenant and the number of rooms he has in his apartment. 

5. Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.*/ 

let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}

console.log(building.numberOfFloors);                     //Prints: 4
console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor);  //Prints: 12

console.log(building.nameOfTenants[1] + building.numberOfRoomsAndRent.dan[0]); 	              //Prints: Dan4

let rentPrice = building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1];  //Prints: 1490  
//console.log(rentPrice);

let danRent = building.numberOfRoomsAndRent.dan[1];                                           //Prints: 1000
//console.log(danRent);

if (danRent < rentPrice) {
	console.log(danRent + 200);                                                               //Prints: 1200
}
	


/* Exercise 5 : Family 

1. Create an object called family with a few key value pairs.
2. Using a for loop, console.log the keys of the object.
3. Using a for loop, console.log the values of the object. */

let family = {
	mom : "Shelly",
	dad : "Ben",
	brother : "Joe",
	sister : "Ann",
}


//for (let mom in family) {
	//console.log(`${mom}: ${family[mom]}`);
//}


for (let mom in family) {
	console.log(`${mom}`);                               //Prints: dad,mom,brother,sister
}

for (let mom in family) {
	console.log(`${family[mom]}`);                       //Prints: Shelly,Ben,Joe,Ann
}





/* Exercise 6: */

let details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer',
}

for (let my in details) {
	console.log(`My ${details.my} is ${details.is} the ${details.the}`);      //Prints: My name is Rudolf the reindeer

}


/* Exercise 7 : Secret Group
1. A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.

2. Console.log the name of their secret society. The output should be “ABJKPS”	*/

let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]

let orderdNames = names.sort();
console.log(orderdNames);

let groupName = "Amanda".substring(0, 1) + "Bernard".substring(0, 1) + "Jack".substring(0, 1) + "Kyle".substring(0, 1) + "Philip".substring(0, 1)+ "Sarah".substring(0, 1);
console.log(groupName);                     //Prints: ABJKPS











