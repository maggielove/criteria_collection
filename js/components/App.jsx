import { useEffect, useState } from 'react';
import FilterPage from './FilterPage.tsx';
import Navigation from './Navigation.jsx';
import Slides from './Slides.jsx';
import FilmCard from './FilmCard.tsx';
import { fetchHelper } from '../utilities/api';

const App = () => {
  const [dataFetched, setDataFetched] = useState(false);
  const [serverError, setServerError] = useState("");
  const [filterPageHidden, setFilterPageHidden] = useState(true);
  const [films, setFilms] = useState([]);
  const [genres, setGenres] = useState([]);
  const [directors, setDirectors] = useState([]);
  const [decades, setDecades] = useState([]);

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

   return (
     <>
      <Navigation updateFilms={updateFilms} />
      <Slides />
      <FilterPage  hidden={filterPageHidden} genres={genres}
        directors={directors} decades={decades} updateFilms={updateFilms}
        toggleFilterPage={handleFilterClick} />

      <div className="lower-modules-heading">
        <h2 className="listings-header">All Films</h2>
        <button className="filter-cta" onClick={handleFilterClick}>
          filter +
        </button>
      </div>

      <div className="film-card-wrapper">
        {films &&
          films.map((film, index) => <FilmCard director={film.director.name}
            title={film.title} image={film.image} decade={film.decade.name} key={index}
            />)
        }
      </div>
      {serverError &&
        <p className="no-results">Apologies, there's been a server error</p>
      }
      {!serverError && films.length === 0 &&
        <p className="no-results">No results found</p>
      }
     </>
   );
};

export default App;
