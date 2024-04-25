import { useEffect, useState } from 'react';
import Login from './Login.jsx';
import FilterPage from './FilterPage.tsx';
import Navigation from './Navigation.jsx';
import Slides from './Slides.jsx';
import FilmCard from './FilmCard.tsx';
import { fetchHelper } from '../utilities/api';
import useToken from '../hooks/useToken';
import classNames from 'classnames';

const updateMyList = (data) => {
  return fetch('/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ userId: data.userId, filmId: data.filmId })
  })
  .then(data => data.json())
  .catch(error => error)
}

const App = () => {
  const { setToken, token } = useToken();

  // TODO change to firstDataFetched
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

    if (token) {
      setMyList(token.myList) // continue to display user list on page reload
    }
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

  const handleAddFilm = async (film) => {
    // Hit API to update user list
    const result = await updateMyList({
      userId: token.id,
      filmId: film.id
    });

    // update "My Films list"
    setMyList(result.myList);
  }

  let resultText = films.length === 1 ? 'Result' : 'Results';

  // const myListHeadingClass = classNames("");

   return (
     <>
     { showLogIn && <Login setToken={setToken} setShowLogIn={setShowLogIn}
      setUsername={setUsername} setMyList={setMyList} /> }
      <Navigation updateFilms={updateFilms} onSignIn={handleSignIn} token={token} />
      <Slides />
      <FilterPage hidden={filterPageHidden} genres={genres}
        directors={directors} decades={decades} updateFilms={updateFilms}
        toggleFilterPage={handleFilterClick} />
      <div className="lower-modules">
      {token &&
        <div className="my-list">
          <h2 className="listings-header">My List</h2>
          {!myList.length && <p className="no-results">No films yet</p>}
          {myList.length &&
            <div className="films-wrapper">
              {myList.map(film =>
                <FilmCard film={film} key={film.id} token={token}
                handleAddFilm={() => handleAddFilm(film)} isSaved={true} />
              )}
            </div>
          }
        </div>
        }
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
          token={token} handleAddFilm={() => handleAddFilm(film)} />)}
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
