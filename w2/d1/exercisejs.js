// exercise 1 :
let favoriteFood = "bread"
let favoriteMeal = "dinner"

console.log(`I eat ${favoriteFood} at every ${favoriteMeal}`);


// exercise 2 - part 1 :
let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
myWatchedSeries = 3

let myWatchedSeriesSentence = "black mirror, money heist, and the big bang theory"


console.log(`I watched ${myWatchedSeries} series: ${myWatchedSeriesSentence}.`);

// exercise 2 - part 2 :
/* let myWatchedSeriesSentence = "black mirror, money heist, and the big bang theory"
let myWatchedSeriesSentence2 = myWatchedSeriesSentence.replace("the big bang theory","friends")*/

//exercise 3:
let celsiusTemperature = 30;
let fahrenheitTemperature = celsiusTemperature / 5 * 9 + 32;

console.log(`The celsius now its ${celsiusTemperature} while in fahrenheit is ${fahrenheitTemperature}.`)

//exercise 4 :
let c;
let a = 34;
let b = 21;  

console.log(a+b); // Prediction: 55
//Actual: 55

a = 2
console.log(a+b); // Prediction: 23
//Actual: 23

console.log(c); // prints: undefined


//exercise 5 :
console.log(typeof(15));
// Prediction: number
// Actual:number

console.log(typeof(5.5));
// Prediction: number
// Actual:number

console.log(typeof(NaN));
// Prediction: undefined;
// Actual:number

console.log(typeof("hello"));
// Prediction: string
// Actual:string

console.log(typeof(true));
// Prediction: boolean
// Actual:boolean

console.log(typeof(1 != 2));
// Prediction: true
// Actual:boolean

console.log("hamburger" + "s");
// Prediction: string
// Actual:hamburgers

console.log("hamburgers" - "s");
// Prediction: hamburger
// Actual:NaN

console.log("1" + "3");
// Prediction: 13
// Actual: 13

console.log("1" - "3");
// Prediction: undefined
// Actual: -2

console.log("johnny" + 5);
// Prediction: string
// Actual: johnny5

console.log("johnny" - 5);
// Prediction: undefined
// Actual: NaN

console.log(99 * "hello");
// Prediction: undefined
// Actual: NaN

console.log(1 != 1);
// Prediction: false
// Actual: false

console.log(1 == "1");
// Prediction: false
// Actual: true

console.log(1 === "1");
// Prediction: true
// Actual: false




//exercise 6 :

console.log(5 + "34");
// Prediction: 39
// Actual: 534

console.log(5 - "4");
// Prediction: NaN
// Actual: 1

console.log(10 % 5);
// Prediction: 0
// Actual: 0

console.log(5 % 10);
// Prediction: 0
// Actual:5

console.log("Java" + "Script");
// Prediction: JavaScript
// Actual: JavaScript

console.log(" " + " ");
// Prediction: undefined
// Actual:

console.log(" " + 0);
// Prediction: 0
// Actual: 0

console.log(true + true);
// Prediction: true
// Actual: 2 

console.log(true + false);
// Prediction: undefined
// Actual: 1

console.log(false + true);
// Prediction: undefined
// Actual: 1 

console.log(false - true);
// Prediction: NaN
// Actual: -1

console.log(!true);
// Prediction: false
// Actual: false

console.log(3 - 4);
// Prediction: -1
// Actual: -1

console.log("Bob" - "bill");
// Prediction: Bob bill
// Actual: NaN

