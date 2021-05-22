import { useSelector } from 'react-redux'

const MovieInfo = () => {
  
  const { movieDetail } = useSelector(state => state.movie)

  const movie = {
    Poster: movieDetail.Poster,
    details: [
      {
      label: 'Title',
      value: movieDetail.Title
      },
      {
        label: 'Year',
        value: movieDetail.Year
      },
      {
        label: 'Type',
        type: movieDetail.Type
      },
      {
        label: 'imdbID',
        value: movieDetail.imdbID
      }
    ]
  }

  return { movie }
}

export default MovieInfo