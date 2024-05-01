import FilmCard from './FilmCard.tsx';

const MyList = ({ myList, token, handleAddFilm }) => {
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
