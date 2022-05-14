import React from 'react';

// Exercise 2: part 1 ----------

// 1. Create a new Class component named Events.
//
// 2. Create an arrow function called clickMe. It should alert the string ‘I was clicked’.
//
// In the render() method, create a button that when clicked on, calls the clickMe function.



//Exercise 2: part 2
// In the render() method of the Events Class component, create an input tag that has an onKeyPress event handler, that listens
// to a function called handleKeyPress.



class Events extends React.Component {
  constructor() {
    super();


  }

  clickMe = () => {
    alert('I was clicked!')
  }


  handleKeyPress = (e) => {
    console.log(e.target.value);
    if (e.target.value !== '') {
      alert(`The ENTER key was pressed,your input: ${e.target.value} `)
    }
  }

  render() {
    return (
      <div>
      <button onClick={this.clickMe}>Click me</button>
      <br/><br/>
      <input placeholder='Press to ENTER key!' onKeyPress={this.handleKeyPress}/>
      </div>
    )


  }
}

export default Events;
