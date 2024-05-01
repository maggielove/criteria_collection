import FilterHeading from './Filter/FilterHeading';
import FilmCard from './FilmCard';

interface DirectorProps {
  id: number,
  name: string
}

interface DecadeProps {
  id: number,
  name: string
}

interface FilmProps {
  id: number,
  image: string,
  director: DirectorProps,
  title: string,
  decade: DecadeProps,
}

interface TokenProps {
  id: number
}

interface AllFilmsProps {
  handleFilterClick: () => void,
  handleAddFilm: (film: FilmProps) => void,
  films: FilmProps[],
  serverError: string,
  token: TokenProps,
}

const AllFilms = ({ handleFilterClick, films, serverError, token, handleAddFilm }: AllFilmsProps) => {
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
