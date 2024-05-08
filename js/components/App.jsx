import { useEffect, useState } from 'react';
import Navigation from './Navigation.tsx';
import Login from './Login.jsx';
import Slides from './Slides.tsx';
import MyList from './MyList.tsx';
import AllFilms from './AllFilms.tsx';
import FilterPage from './Filter/FilterPage.tsx';
import { fetchHelper } from '../utilities/api';
import useToken from '../hooks/useToken';

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
  const [username, setUsername] = useState('');


  useEffect(() => {
    // make log in modal disappear when token is set
    setShowLogIn(false);

    if (token) {
      // continue to display user list on page reload
      setMyList(token.myList)
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
      {token && <MyList token={token} myList={myList} handleAddFilm={handleAddFilm} />}
      <AllFilms handleFilterClick={handleFilterClick} handleAddFilm={handleAddFilm}
        films={films} serverError={serverError} token={token} />
      </div>
     </>
   );
};

export default App;
