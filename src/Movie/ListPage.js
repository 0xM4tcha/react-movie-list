import InputList from '../components/InputList'
import GeneralCard from '../components/GeneralCard'
import GeneralModal from '../components/GeneralModal'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setMovieDetail } from '../redux/movie'
import useMovieSearch from './useMovieSearch'
import InfiniteScroll from 'react-infinite-scroll-component';

function MovieList() {

  const [ keyword, setKeyword ] = useState('')
  const [ pageNumber, setPageNumber ] = useState(1)
  const [ selectedMovie, setSelectedMovie ] = useState(null)
  const history = useHistory()
  const dispatch = useDispatch()

  const {
    isLoading,
    hasMore,
    movies
  } = useMovieSearch({keyword, pageNumber})

  const handleSearch = (e) => {
    setKeyword(e.target.value)
    setPageNumber(1)
  }

  const handleClickCard = (type, item) => {
    if (type === 'detail') {
      dispatch(setMovieDetail(item))
      history.push('/detail')
    } else {
      setSelectedMovie(item.Poster)
    }
  }

  const handleShowMore = () => {
    setPageNumber(pageNumber+1)
  }

  return (
    <div className="App">
      <InfiniteScroll
        dataLength={movies && movies.length}
        next={handleShowMore}
        hasMore={hasMore}
      >
      <div className="title is-3">Search Movie</div>
      <GeneralModal
        imageUrl={selectedMovie}
        isShow={selectedMovie}
        closeModal={() => setSelectedMovie(null)}
      />
      <InputList 
        items={movies}
        value={keyword}
        change={handleSearch}
      />
      <div className="block"></div>
      <div className="columns is-multiline">
        {
          movies && movies.map((item, index) => (
            <div className="column is-one-fifth" key={index} >
              <GeneralCard 
                image={item.Poster}
                title={item.Title}
                subtitle={item.Year}
                onClickImage={() => handleClickCard('image', item)}
                onClickDetail={() => handleClickCard('detail', item)}
              />
            </div>
          ))
        }
      </div>
      <div> {isLoading && 'loading...'}</div>
      </InfiniteScroll>
    </div>
  );
}

export default MovieList;
