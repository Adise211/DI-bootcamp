import {connect} from 'react-redux';


const MovieDetails = (props) => {
  // console.log(props);
  return (
    <div>
      <h2>Movie details </h2>
      <p>Title : {props.movie.title}</p>
      <p>Release date: {props.movie.releaseDate}</p>
      <p>rating: {props.movie.rating}</p>
    </div>
  )
}


const mapStateToProps = (state) => {
  console.log(state.selectedMovieReducer.movie);
  return {
    movie: state.selectedMovieReducer.movie
  }
}

export default connect(mapStateToProps)(MovieDetails);
