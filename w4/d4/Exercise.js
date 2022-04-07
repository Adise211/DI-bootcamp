// Exercise 1 : Location 
 
//1. Analyze the code below. What will be the output?

 const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// Expected output: I am John Doe from Vancouver,Canada. Latitude (49.2827), Longitude -(123.1207).








// Exercise 2: Display Student Info 
/* 
1. Create a function called displayStudentInfo(studentObject) that accepts an object as a parameter. 
2. For example displayStudentInfo({first: 'Elie', last:'Schoppik'}).
3. Destructure the parameter inside the function and return a string as the example seen below: */

function displayStudentInfo(first,last) {   // I tried to put an object as parameter but it's not working !
	//const {first,last} = person;
	console.log(`Your name is ${first} ${last}`);

}

displayStudentInfo("Lily","Snow");











// Exercise 3: User & Id
/*
1. Using methods taught in class, turn the users object into an array: ..
2. Modify the outcome of part 1, by multipling the user’s ID by 2.  */

const users = { 
	user1: 18273, 
	user2: 92833, 
	user3: 90315 
};


let asArray = Object.entries(users);
console.log(asArray);

const {user1,user2,user3} = users;



console.log(`user1 : ${user1 * 2}`);
console.log(`user2 : ${user2 * 2}`);
console.log(`user3 : ${user3 * 2}`);

// const idNumbers = Object.values(users);
// console.log(idNumbers);


// idNumbers.forEach(element => {

// 	console.log(element * 2)
// })

// const first = users["user1"] * 2;
// const second = 
// console.log(test);










// Exercise 4: Person Class
//1. Analyze the code below. What will be the output?

class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);
// Expected output: object









// Exercise 5: Dog Class
/*
1. Analyze the options below. Which constructor will successfully extend the Dog class?..
answer = number 2 */



class Dog {
  constructor(name) {
    this.name = name;
  }
};


  // 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};












// Exercise 6: Challenges 


[2] === [2] // true
{} === {}   // true




const object1 = { number: 5 };   
const object2 = object1;         
const object3 = object2; 
const object4 = { number: 5}; 
object1.number = 4;

// the value of the property 'number' will be 5 in all the
// objects except from object1 - his value will be 4.





