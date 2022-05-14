import React from 'react';


// Exercise 3: part 1
// Create a new Class Component named Phone. Use constructor, super(), and a state object with the following properties ....
// In the render method of the Phone component, display the values of the state properties.
// Import the Phone component and display it in your App.js.




// Exercise 3; part 2
// In the Phone component create a function named changeColor that updates the color property to ‘blue’
//
// In the render() method of the Phone component, add a button with an onClick event that will call the changeColor function to change the color property.

class Phone extends React.Component {
    constructor() {
      super();

      this.state = {
      brand: "Samsung",
      model: "Galaxy S20",
      color: "black",
      year: 2020
      };


    }


    changeColor = () => {
      this.setState({color:"blue"})
    }


    render() {
      const brand = this.state.brand;
      const model = this.state.model;
      const color = this.state.color;
      const year = this.state.year;


      return (
        <div>
          <h2>My phone is a {brand} </h2>
          <p> It's {color} {model} from {year} </p>
          <button onClick={this.changeColor}>Change color</button>


        </div>
      )


    }


}

export default Phone;
