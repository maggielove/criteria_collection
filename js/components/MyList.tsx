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
  decade: DecadeProps
}

interface TokenProps {
  id: number
}

interface MyListProps {
  myList: FilmProps[],
  token: TokenProps,
  handleAddFilm: (film: FilmProps) => void
}

const MyList = ({ myList, token, handleAddFilm }: MyListProps) => {
  return (
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
  )
}

export default MyList;
