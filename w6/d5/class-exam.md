

# Review on Javascript
​


#### Basics
​
1. How to access the second element of the array `let arr = [3, 7, 10]`
A: => arr[1]
​
2. For the code below, what does `arrNums.splice(2, 0)` return?
​
    ```javascript
    let arrNums = [1, 2, 3, 4, 5];
    ```
​A: => 1,2,3,4,5

3. What is the result of the following code :
​
    ```javascript
    const oneTwoThree = [1, 2, 3]
    const sevenEightNine = [7, 8, 9]
    
    const all = [4, 5, 6, ...oneTwoThree, ...sevenEightNine];
    console.log(all)
    ```
​A: => coping and packing the two arrays into one ---> all = 4,5,6,1,2,3,7,8,9

4. What does the following code print to the console?
​
   ```javascript
   let golf = {
     type: "sport",
     clubs: {
       high_end: "taylor made",
       low_end: "rusty basement clubs"
     }
   }  
   golf.clubs.high_end = "callaway";
   console.log(golf.clubs.high_end);  // A: => Prints : "callaway"
   ```
   
5. Can we define the function as follows? If yes, what is it called, and explain how to invoke it.
​
    ```javascript
    const x = function(a, b){
       return a*b;
    }
    ```
​A: It called an exprestion function, to invoke it we need call the function ---> x();


6. Variables created **without** any keyword, are always global, even if they are created inside a function ? Yes or No and explain
​
    ```javascript
    function x() {
    	a = 5;
    }
    ```
​A: absolutely not! because the varaible declaration (a=5) is inside the function block, it makes it as local scope. In addition, it have to follow by a keyword in order to reuse it in the future, otherwise it's not consider as a varaible.











#### Functions
​
7. In JavaScript can we pass functions as arguments to other functions? What does this code return ?
​
    ```javascript
    function sayHello() {
       return "Hello, ";
    }
    function greeting(helloMessage, name) {
      console.log(helloMessage() + name);
    }
    greeting(sayHello, "JavaScript!");
    ```
A: Yes it is posibble as long as we using the 'return' keyword at the end of the function. We wiil get ----> "Hello, JavaScript!"

8. Transform this function into an arrow function
​
      ```javascript
      function sum(num1, num2){
          return num1 + num2
      }
      
      sum(40,2)
      sum(42,0)
      console.log("the answer to everything is", sum(42,0))
      ```

    A: const sum = (num1,num2) => {num1 + num2}       
​
9. What does the following code print to the console? Explain the process and concept behind it
​
     ```javascript

     function foo () {   // 2.
       function bar() {   // 3. 
         return "Poppin' bottles";  //4.
       }
       return bar();
     }
     console.log(foo());  // 1.
     
     ```
​     A: //Prints: "Poppin' bottles"











#### DOM
​
10. Which of the following events will you add in the `addEventListener()`method? 
      ☐ click
      ☐ onclick
​
A: => It's possible to put both, but Ill choose the "click" 

11. Does the `addEventListener()` method allow you to add many events to the same element?
​
    ```javascript
    x.addEventListener("mouseover", func1);
    x.addEventListener("click", func2);
    x.addEventListener("mouseout", func3);`
    ```
​A: => YES ! it's possible.

12. DOM exercise
​
      1. Part I : Create a button in your HTML page, when the user will click the the button a paragraph will be added on the DOM with the content "New Paragraph". Use arrow functions
​
      2. Part II : Add to each new paragraph a event listener of mouse over. When you hoover on a paragraph, it should become red

​A: IN FILES class-exercise.html AND class-exercise.js !!














#### Array Methods
​
14. What is the value of `passed` in the following code?
​
     ```javascript
     let marks = [67, 60, 89, 90, 67, 42];
     
     let passed = marks.every(function(m) {
        return m >= 50;
     });
     ```
​A: will check first if every number pass the test (condition inside the function), if it pass it will execute every number that bigger or equal to 50 --> //Prints: 67,60,89,67 


15. What does the following code log?
​
   ```javascript
   let nums = [10, 50, 88];
   
   let bignums = nums.filter(function(n) {
      return n > 10;
   });
   
   console.log(bignums);
   ```
A: the method filter(​) filters all the numbers that bigger then number 10 ---> // Prints: 50,88


16. Use a javascript array method to square the value of every element in the array. 
​
   ```javascript
   const input = [ 1, 2, 3, 4, 5 ];
   //code
A: input.forEach(element => console.log(element * element))
   console.log(input) // [ 1, 4, 9, 16, 25]
   
   ```
​
16. Use 2 javascript array methods and chain them to return the sum of all the positives ones. 
​
     ```javascript
     const secondInput = [ 1, -4, 12, 0, -3, 29, -150];
     //code
  A: const positive = secondInput.filter(num => num >= 0);
     const total = positive.reduce((acc,number) => acc + number, 0 );
     console.log(total) //42
     ```
​
17. Use 3 javascript methods and chain them to abbreviate the name and return the name initials.
​
     ```javascript
     const input = 'George Raymond Richard Martin';
     //code 
 A:  let initials = input.charAt(0) + input.charAt(7) + input.charAt(15) + input.charAt(23);
     console.log(initials);
     console.log(initials)//'GRRM'
     ```
​











#### Object and Classes
​
18. How the objects are passed in JavaScript? By Value or By Reference ? Explain with an example

A: Object in JS passed by refrence and NOT by value because object (and arry) not considerded as primitive data type as string,number,boolean etc. 
​

19. What will be printed in the console
​
    ```javascript
    function Item(name, price) {
       this.name = name;
       this.price = price;
       this.displayInfo = function() {
       console.log(this.name + " is for $ " + this.price)
       }
    } 
​
    const cake = new Item("Chocolate Cake", 10);
    cake.displayInfo();
    ```
​ A: Prints ==> "Chocolate Cake is for $10 "


20. Refactor this code using Classes

A: 
class Item {
    constructor(name,price) {
      this.theName = name;
      this.thePrice = price;
    }
    displayInfo = function () {
      console.log(this.theName + " is for $ " + this.thePrice)
    }

}

let cake = new Item("Chocolate Cake", 10);
cake.displayInfo();
















#### Promises
​
21. What will be the output and why ? What will be the state of the promise ?
​
    ```javascript
    Promise.resolve('Success!')
      .then(data => {
        return data.toUpperCase()
      })
      .then(data => {
        console.log(data)
      })
    ```

  A: Output ==> 'Success!' . 
  A: Why ? ==> because first we used the 'resolve' keyword as - return us the promise when it just fulfilled and resolved. When we got the results we used the .then() to cunsome those results.
  A: State of the promise ? ==> fulfilled
​


22. What log will be made by the following code, after 2 seconds?
​
    ```javascript
    const p = new Promise(function(resolve, reject) {
       setTimeout(function() {
          resolve("OK");
       }, 2000);
    });
    
    p.then().then(function(data) {
       console.log(data);
    });
    ```
​A: After 2 seconds: "OK" ..



23. Consider the following async function and its output. What will be displayed to the console when calling the `f()` function? Explain the process
​
    ```javascript
    async function f() {         // 2. The calling guides to this line (to read the function)        
      let result = 'first!';                              // 6. The value of the 'result' varaible will be executed last --> 'first!'
      let promise = new Promise((resolve, reject) => {         
        setTimeout(() => resolve('done!'), 1000);            // 3. The first code that will be exacuted after one min --> 'done!'
      });
    
      result = await promise;                             // 4. The result waiting for the promise above to finish --> resolve/reject
    
      console.log(result);                           // 5. After the promise finished to fulfilled --> the result will ba excuted
    }
    
    f();           //  1.The computer will read the calling first 
    ```
​



24. Use async await, and fetch to a fact on cats and display it `https://catfact.ninja/fact`. 
    1. Create 2 functions : one to fetch data from API, the other one to display it on the page using the DOM
    2. Make sure to use try and catch.

A: IN FILES class-exercise.html AND class-exercise.js !!