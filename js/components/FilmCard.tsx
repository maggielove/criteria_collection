import "../../styles/app.scss";

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
  decade: DecadeProps
}

interface TokenProps {
  id: number
}

interface FilmCardProps {
  film: FilmProps,
  token: TokenProps,
  handleAddFilm: () => void,
  isSaved?: boolean
}

const FilmCard = ({ film, token, handleAddFilm, isSaved }: FilmCardProps) => {


  return (
    <div className="film-card">
      <div className="image-container">
        <img src={film.image} />
      </div>

      <div className="film-details">
        <p className="director">{film.director.name}</p>
        <p className="title">{film.title}</p>
        {token && !isSaved && <p className="add-icon" onClick={handleAddFilm}>+</p>}
      </div>

      <div className="year"><p>{film.decade.name}</p></div>
    </div>
  );
}

export default FilmCard;
