import GeneralCardDetail from '../components/GeneralCardDetail'
import movieInfo from './useMovieInfo'

const MovieDetail = () => {
  const { movie } = movieInfo()
  return (
    <div className="detail-page">
      <div className="title is-3">Detail Movie</div>
      <GeneralCardDetail 
        image={movie.Poster}
        details={movie.details}
      />
    </div>
  )
}

export default MovieDetail