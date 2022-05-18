import React from 'react';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
            languages : [
                {name: "Php", votes: 0},
                {name: "Python", votes: 0},
                {name: "JavaSript", votes: 0},
                {name: "Java", votes: 0}
            ]
        }

  } // end of constructor



    handleClick = (value) => {
      // console.log(i,);
      this.state.languages[value].votes++;
      console.log(this.state.languages);
      this.setState({languages: [...this.state.languages]})

    }


  render () {
    const data = this.state.languages;
    return (
      <div className="App">
        <header className="App-header">
          <div>
            {
              data.map((item,i) => {
                return (
                  <div key={i}>
                    <p>{item.name}</p>
                    <p>{item.votes}</p>
                    <button onClick={()=> this.handleClick(i)}>Click Here</button>
                  </div>
                )
              })
            }
          </div>
        </header>
      </div>
    )

  }




} // end of class




export default App;
