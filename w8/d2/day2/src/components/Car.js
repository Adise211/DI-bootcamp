import React from 'react';
import Garage from './Garage.js';



// Exercise 1 : part 1
// In App.js create an object const carinfo = {name: "Ford", model: "Mustang"};
//
// In your React app create a new folder in the src path, name it Components. It should contain a Class Component named Car.js.
//
// In the Car.js component render a header with the carInfo model, for example This car is <model>.
//
// Import the Car.js component to the App.js.


//Exersice 1: part 2
// Create a constructor function in the Car component, and add a color property in the state.
// 
// Display the color property in the render() method, for example This car is <color> <model>.



class Car extends React.Component {
  constructor(props) {
    super(props);

    this.state = {color:'red'}
  }


  render() {
    console.log(this.props);
    const {info} = this.props;
    const {name,model} = info;

    return (
      <div>
      <h1>The car's name is {name}, model {model} and {this.state.color} color.</h1>
      <Garage size={'small'} />
      </div>
    )


  }
}

export default Car;
