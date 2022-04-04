
// 1. Create an array using forEach that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.

const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];



gameInfo.forEach((user) => {
  user.username += "!"
  console.log(user.username);

})





// 2. Create an array using forEach that contains the usernames of all players with a score bigger than 5. Use the ternary operator:

gameInfo.forEach((name) => {
  return(name.score > 5 ? console.log(name.username) : "false" );
    
})




// 3.Find and display the total score of the users :


let sum = 0;

gameInfo.forEach((users) => {
  sum += users.score;
})

console.log(sum);



