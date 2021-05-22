import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useMovieSearch({keyword, pageNumber}) {

  const [ isLoading, setLoading ] = useState(true)
  const [ isError, setError ] = useState(false)
  const [ movies, setMovies ] = useState(null)
  const [ hasMore, setHasMore ] = useState(false) 
  
  useEffect(() => {
    setMovies([])
  }, [keyword])

  useEffect(() => {
    setLoading(true)
    setError(false)
    let cancel
    axios({
      method: 'GET',
      url: 'https://www.omdbapi.com',
      params: {
        apikey: 'faf7e5bb',
        s: keyword,
        page: pageNumber
      },
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      const lengthSearch = res.data.totalResults
      const currentMovies = movies || []
      currentMovies.push(...res.data.Search)
      setMovies(lengthSearch > 10 ? currentMovies : res.data.Search)
      setHasMore(res.data.totalResults > 5 && res.data.totalResults > movies.length)
      setLoading(false)
    }).catch(e=> {
      setError(true)
      setLoading(false)
      if (axios.isCancel(e)) return
    })
    return () => cancel()
  }, [keyword, pageNumber])
  return { isLoading, isError, movies, hasMore }
}
