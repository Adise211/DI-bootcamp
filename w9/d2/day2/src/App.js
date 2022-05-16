import React from 'react';
import './App.css';
import FirstName from './components/FirstName';
import SecondName from './components/SecondName';
import MatchButton from './components/MatchButton';
import Results from './components/Results';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <FirstName />
        <SecondName />
        <MatchButton />
        <Results />
        </header>
      </div>
    );
  }


} // end of class


export default App;
