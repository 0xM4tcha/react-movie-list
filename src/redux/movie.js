import { createSlice } from '@reduxjs/toolkit'

export const movie = createSlice({
  name: 'movie',
  initialState: {
    movieDetail: JSON.parse(localStorage.getItem('movieDetail')) || {
      Poster: 'https://bulma.io/images/placeholders/1280x960.png',
      Title: 'title movie',
      Year: 'year movie',
      Type: 'Movie',
      imdbID: 'tt0078346'
    }
  },
  reducers: {
    setMovieDetail: (state, action) => {
      state.movieDetail = action.payload
      localStorage.setItem('movieDetail', JSON.stringify(state.movieDetail))
    }
  },
})

export const { setMovieDetail } = movie.actions

export default movie.reducer