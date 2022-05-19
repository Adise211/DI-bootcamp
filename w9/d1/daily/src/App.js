import './App.css';
import React from 'react';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MovieList />
          <MovieDetails />
        </header>
      </div>
    );
  }// end of render




}// end of class

export default App;
