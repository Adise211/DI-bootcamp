
import './App.css';
import React from 'react';
import Car from './components/Car.js';
import Events from './components/Events.js';
import Phone from './components/Phone.js';
import Color from './components/Color.js';



// import Language from './Language.js';

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//             languages : [
//                 {name: "Php", votes: 0},
//                 {name: "Python", votes: 0},
//                 {name: "JavaSript", votes: 0},
//                 {name: "Java", votes: 0}
//             ],
//             myvotes:[]
//         }
//
//
//   }
//
//     handleClick = (e) => {
//
//       const all = this.state.languages;
//       all.map(item => {
//         return (
//           this.setState({myvotes:item.votes})
//         )
//
//       })
//     }
//
//
//
//
//     render() {
//       // console.log(this.state.languages);
//       console.log(this.state.myvotes);
//       const obj = this.state.languages;
//       return (
//         <div>
//           {
//             obj.map((item, i)=> {
//               return (
//                 <Language key={i} one={item} clickme={this.handleClick}/>
//               )
//             })
//           }
//         </div>
//
//       )
//     }
//
//
//
//
// }//End of class



class App extends React.Component {
  constructor() {
    super();


  }

  render() {
    const carinfo = {name: "Ford", model: "Mustang"};

    return (
      <div>
      <Car info={carinfo} />
      <Events />
      <Phone />
      <Color />

      </div>
    )


  }


}//End class

export default App;









// 1. show the data on the page: send the state info to Language.js
// 2. create a button : function where votes increasing by one every time you click on thr button.
//3. change the state ==> s
