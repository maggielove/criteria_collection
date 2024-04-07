import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Navigation = ({ updateFilms }) => {
  const [searchTerm, setSearchTerm] = useState("");
  let [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e) => {
    // TODO only do this after search term is >= 2 letters
    // maybe also debounce
    setSearchTerm(e.target.value);
  }

  const handleKeyDown = (e) => {
    if (e.key === 'enter') {
      console.log('keyed enter');

      setSearchParams(searchParams => {
        searchParams.set("search", searchTerm);
        return searchParams;
      })

      // update film listings
      updateFilms();
    }
  }

   return (
     <div className="navigation">
      <h1>The Criteria Channel</h1>
      <p>Now Playing</p>
      <p>All Films</p>
      <form onChange={handleChange} onKeyDown={handleKeyDown}>
        <label htmlFor="search">Search</label>
        <input type="text" id="search" />
      </form>
     </div>
   );
};

export default Navigation;
