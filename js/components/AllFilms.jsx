import FilterHeading from './Filter/FilterHeading.jsx';
import FilmCard from './FilmCard.tsx';

const AllFilms = ({ handleFilterClick, films, serverError, token }) => {
  let resultText = films.length === 1 ? 'Result' : 'Results';

  return (
    <>
      <FilterHeading handleFilterClick={handleFilterClick} />
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
    </>
  )

}

export default AllFilms;
