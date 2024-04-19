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
  token: TokenProps
}

const FilmCard = ({ film, token }: FilmCardProps) => {
  const addToMyList = () => {
    console.log('add to list');

    console.log(token.id);

    const userId = token.id;

    // using token hook, get user id
    return fetch('/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userId, filmId: film.id })
    })
    .then(data => data.json())
    .catch(error => console.log({error}))

    // update "My Films list"
  }

  return (
    <div className="film-card">
      <div className="image-container">
        <img src={film.image} />
      </div>

      <div className="film-details">
        <p className="director">{film.director.name}</p>
        <p className="title">{film.title}</p>
        {token && <p className="add-icon" onClick={addToMyList}>+</p>}
      </div>

      <div className="year"><p>{film.decade.name}</p></div>
    </div>
  );
}

export default FilmCard;
