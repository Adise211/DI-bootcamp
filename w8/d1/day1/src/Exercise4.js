import React from 'react';
import './Exercise4.css';

// Exercise 4 : part 1

// In a separate Javascript file, create a new Component called Exercise4 that contains some HTML tags.
// create a <h1> tag and set its color to red, and the background color to lightblue.
// create a paragraph, a link, a form, an image and a list.
// Import Exercise4 to the App.js file and display it.

// Exercise 4: part 2
//1. Add the below object to the component Exercise4. Use this object to style the <h1>

//Exercise 4: part 3
//1. Create a new css file named Exercise4.css and import it in your Exercise4 component.
//2. Add the following CSS properties to the CSS file, and apply them to the paragraph tag:


const Exercise4 = () => {
  const href = 'https://en.wikipedia.org/wiki/Monkey';
  const img = 'https://s3-us-west-2.amazonaws.com/melingoimages/Images/61841.jpg';
  const alt = 'Monkey';
  const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};

  return (
    <div>
      <h1 style={{color:'red',backgroundColor:'lightblue'}}>I'm the h1 tag from part 1</h1>
      <h1 style={style_header}>I'm h1 from part 2</h1>
      <p className='para'>I'm a paragraph</p>
      <a href={href}>I'm a link to somewhere</a>
      <form>
        Enter your name:<input/>
      </form>
      <img src={img} alt={alt}/>
      
    </div>
  )
}






export default Exercise4;
