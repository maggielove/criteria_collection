import "../../styles/app.scss";

interface FilmCardProps {
  title: string,
  director: string,
  decade: string,
  image: string
}

const FilmCard = ({ title, director, decade, image }: FilmCardProps) => {

  return (
    <div className="film-card">
      <div className="image-container">
        <img src={image} />
      </div>

      <div className="film-details">
        <p className="director">{director}</p>
        <p className="title">{title}</p>
      </div>

      <div className="year"><p>{decade}</p></div>
    </div>
  );
}

export default FilmCard;
