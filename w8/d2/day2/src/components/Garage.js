// Exercise 1: part 3
// Create another component inside your Components folder, called Garage.js.
//
// Use an attribute to pass a size to the Garage component, <Garage size="small" />.
//
// Use the Garage component inside the Car component and pass the size ‘small’. The Garage component should render Who lives in my <size> Garage?

const Garage = (props) => {
  return (
    <p>Who lives in my {props.size} Garage?</p>
  )
}

export default Garage;
