console.log('hello!');

//exercise 1 :

let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.shift();
console.log(fruits);

fruits.sort();
fruits.push("Kiwi");
console.log(fruits);

fruits.shift();
console.log(fruits);
fruits.reverse();
console.log(fruits);


//exercise 2:
let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits[1][1]);


