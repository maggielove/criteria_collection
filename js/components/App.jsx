import { useEffect, useState } from 'react';
import Navigation from './Navigation.jsx';
import Slides from './Slides.jsx';
import FilterBar from './FilterBar.jsx';
import FilmCard from './FilmCard.jsx';
import { fetchHelper } from '../utilities/api';

const App = () => {
  const [dataFetched, setDataFetched] = useState(false);
  const [films, setFilms] = useState([]);
  const [genres, setGenres] = useState([]);
  const [directors, setDirectors] = useState([]);
  const [decades, setDecades] = useState([]);

  // Initial data load
  useEffect(() => {
    fetchHelper('/api/films', setFilms)
    setDataFetched(true);
  }, [dataFetched]);

  useEffect(() => {
    fetchHelper('/api/genres', setGenres)
  }, [dataFetched]);

  useEffect(() => {
    fetchHelper('/api/directors', setDirectors)
  }, [dataFetched]);

  useEffect(() => {
    fetchHelper('/api/decades', setDecades)
  }, [dataFetched]);
  // end initial data load

  const updateFilms = () => {
    const searchQuery = window.location.search;

    // request data from the API
    fetchHelper(`/api/${searchQuery}`, setFilms);
  }

   return (
     <>
      <Navigation />
      <Slides />
      <FilterBar directors={directors ? directors : []} genres={genres ? genres : []}
      decades={decades ? decades : []} updateFilms={updateFilms} />

      <div className="lower-modules-heading">
        <h2 className="listings-header">All Films</h2>
        <button className="filter-cta">filter +</button>
      </div>

      <div className="film-card-wrapper">
        {films &&
          films.map((film, index) => <FilmCard director={film.director.name}
            title={film.title} image={film.image} decade={film.decade.name} key={index}
            />)
        }
      </div>
      {(films.length === 0) &&
        <p className="no-results">No results found</p>
      }
     </>
   );
};

export default App;
