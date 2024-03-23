import React, { useEffect, useState } from 'react';
import FilterBar from './FilterBar';
import JobCard from './JobCard';
import { fetchHelper } from '../utilities/api';

const App = () => {
  const [dataFetched, setDataFetched] = useState(false);
  const [films, setFilms] = useState([]);
  const [genres, setGenres] = useState([]);
  const [directors, setDirectors] = useState([]);
  const [decades, setDecades] = useState([]);

  useEffect(() => {
    fetchHelper('/api/films', setFilms)
    setDataFetched(true);
    console.log(`films?? `, films);
  }, [dataFetched]);

  useEffect(() => {
    fetchHelper('/api/genres', setGenres)
    console.log(`genres `, genres);
  }, [dataFetched]);

  useEffect(() => {
    fetchHelper('/api/directors', setDirectors)
    console.log(`dirs `, directors);
  }, [dataFetched]);

  useEffect(() => {
    fetchHelper('/api/decades', setDecades)
    console.log(`decades `, decades);
  }, [dataFetched]);

   return (
     <>
      <FilterBar directors={directors ? directors : []} genres={genres ? genres : []}
      decades={decades ? decades : []} />
      {films &&
        films.map((film, index) => <JobCard director={film.director} title={film.title}
          decade={film.decade} key={index}
          />)
      }
     </>
   );
};

export default App;
