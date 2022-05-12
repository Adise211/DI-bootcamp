// Exercise 3:
//1. In the React App, render the first name and the last name of the user in two <h3>.
//2. In a separate Javascript file, create a new Component called UserFavoriteColors. Use props to pass the fav_animals array to the UserFavoriteColors component.
//3. In the UserFavoriteColors component, use the map function to create a new array of <li>‘s.
// Each <li> corresponds to one animal from the fav_animals array.
// Display the <li>‘s. Tip : You can use the second parameter of the map function as a key to uniquely identify each HTML item

import React from 'react';

const UserFavoriteColors = (props) => {

  console.log(props);

  return  (
    < >
      {/* <h3>{props.id} favorite animals: {props.myanimal}</h3>*/}
      <li>{props.id} {props.myanimal}</li>
    </>

  )
}

export default UserFavoriteColors;
