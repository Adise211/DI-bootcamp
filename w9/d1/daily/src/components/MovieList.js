import React from 'react';
import {connect} from 'react-redux';
import {selectedMovie} from '../redux/actions.js'



class MovieList extends React.Component {


  render() {
    const movies = this.props.movies;
    // console.log(movies);
    return (
      <div>
      <h1>Movies :</h1>
        {
          movies.map((item, i) => {
            return (
              <div key={i}>
                {item.title}
                <button onClick={() => this.props.movieDetails(i)}>Details</button>
              </div>
            )
          })
        }
      </div>
    )
  }

} //end of class



const mapStateToProps = (state) => {
  // console.log(state.moviesReducer.movies);
  return {
    movies: state.moviesReducer.movies
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    movieDetails: (index) => dispatch(selectedMovie(index))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(MovieList);
