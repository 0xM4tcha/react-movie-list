import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MovieList from './Movie/ListPage'
import MovieDetail from './Movie/DetailPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" >
          <MovieList />
        </Route>
        <Route path="/detail">
          <MovieDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
