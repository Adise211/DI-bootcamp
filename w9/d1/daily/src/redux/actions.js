

export const selectedMovie = (movie_index) => {
  return {
    type:'SELECTED_MOVIE',
    payload: movie_index
  }
}
