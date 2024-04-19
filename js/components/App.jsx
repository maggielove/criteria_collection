import { useEffect, useState } from 'react';
import Login from './Login.jsx';
import FilterPage from './FilterPage.tsx';
import Navigation from './Navigation.jsx';
import Slides from './Slides.jsx';
import FilmCard from './FilmCard.tsx';
import { fetchHelper } from '../utilities/api';
import useToken from '../hooks/useToken';
import classNames from 'classnames';

const App = () => {
  const { setToken, token } = useToken();

  const [dataFetched, setDataFetched] = useState(false);
  const [serverError, setServerError] = useState('');
  const [filterPageHidden, setFilterPageHidden] = useState(true);
  const [films, setFilms] = useState([]);
  const [genres, setGenres] = useState([]);
  const [directors, setDirectors] = useState([]);
  const [decades, setDecades] = useState([]);
  const [showLogIn, setShowLogIn] = useState(false);
  const [myList, setMyList] = useState([]);
  // TODO prevent empty string when logged-in user refreshes page
  const [username, setUsername] = useState('');

  // make log in modal disappear when token is set
  useEffect(() => {
    setShowLogIn(false);
  }, [token]);

  // Initial data load
  useEffect(() => {
    fetchHelper('/api/films', setFilms, setServerError)
    setDataFetched(true);
  }, [dataFetched]);

  useEffect(() => {
    fetchHelper('/api/genres', setGenres, setServerError)
  }, [dataFetched]);

  useEffect(() => {
    fetchHelper('/api/directors', setDirectors, setServerError)
  }, [dataFetched]);

  useEffect(() => {
    fetchHelper('/api/decades', setDecades, setServerError)
  }, [dataFetched]);
  // end initial data load

  const updateFilms = () => {
    const searchQuery = window.location.search;

    // request data from the API
    fetchHelper(`/api/${searchQuery}`, setFilms);
  }

  const handleFilterClick = () => {
    return filterPageHidden ? setFilterPageHidden(false) :
    setFilterPageHidden(true);
  }

  const handleSignIn = () => {
    setShowLogIn(true);
  }

  let resultText = films.length === 1 ? 'Result' : 'Results';

  // const myListHeadingClass = classNames("");

   return (
     <>
     { showLogIn && <Login setToken={setToken} setShowLogIn={setShowLogIn}
      setUsername={setUsername} /> }
      <Navigation updateFilms={updateFilms} onSignIn={handleSignIn} token={token} />
      <Slides />
      <FilterPage hidden={filterPageHidden} genres={genres}
        directors={directors} decades={decades} updateFilms={updateFilms}
        toggleFilterPage={handleFilterClick} />
      <div className="lower-modules">
        <div className="my-list">
          <h2 className="listings-header">My List</h2>
          {!myList.length ? <p className="no-results">No films yet</p> :
          <p className="no-results">TODO show your films here</p>}
        </div>
        <div className="lower-modules-heading">
          <h2 id="allFilms" className="listings-header">All Films</h2>
          <button className="filter-cta" onClick={handleFilterClick}>
            filter +
          </button>
        </div>
        {films.length > 0 && <p className="results-count">
          <span className="number">{films.length} </span>{resultText}</p>
        }
        <div className="film-card-wrapper">
          {films && films.map((film, index) => <FilmCard film={film} key={index}
          token={token} />)}
        </div>
        {serverError &&
          <p className="no-results">Apologies, there's been a server error</p>
        }
        {!serverError && films.length === 0 &&
          <p className="no-results">No results found</p>
        }
      </div>
     </>
   );
};

export default App;
