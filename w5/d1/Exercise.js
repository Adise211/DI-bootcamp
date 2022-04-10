// Exercise 1 : HTML Form
/*
1. Create a form like the one above. The form should contain three inputs:
a small text input asking for a name,
a larger textarea input to write a message,
a submit input (“Send”)

2. When you click the Send button, the form will be submitted with a GET method. (you can use the same HTML file for the action url)
3. Where will the sent data appear? */



/* Answer for number 3 :
 I created form inside the HTML file and set the method as "GET"
the values tht will be insert inside tje form will be dispaly in the url of the web page. */







//Exercise 2: JSON Mario
/*
1. Convert this JS object into a JSON object. What happens to the nested objects ?
2. Convert and pretty print this JS object into a JSON object. Hint : Check out the JSON lesson on the platform.
3. Use your web inspector to add a breakpoint. Check the values of the JSON object in the debugger. */

let marioGame = {
  detail : "An amazing game!",
  characters : {
      mario : {
        description:"Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser : {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach : {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      }
  },
}

const toJson = JSON.stringify(marioGame,null,2);
console.log(toJson);
// The object turn to kind of Js object but in block (before using pretty print)








