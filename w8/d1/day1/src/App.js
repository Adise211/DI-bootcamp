// import NotJsx from './Exercise.js';
// import Hello from './Exercise.js';
import UserFavoriteColors from './UserFavoriteColors';
import Exercise4 from './Exercise4.js';
import './Exercise4.css';
import './App.css';

function App() {
  const user = {
    first_name: 'Bob',
    last_name: 'Dylan',
    fav_animals : ['Horse','Turtle','Elephant','Monkey']
  };

  const animal = user.fav_animals;

  return (
    <div className="App">
      <header className="App-header">
      <div>
        <h3>Name :{user.first_name}</h3>
        <h3>Last name: {user.last_name}</h3>
        {
          animal.map((item, i) => {
            return (
              <UserFavoriteColors id={i} myanimal={item}/>
            )
          })
        }
        <Exercise4 />
      </div>
      </header>
    </div>
  );
}

export default App;
