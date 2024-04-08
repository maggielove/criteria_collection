import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Navigation = ({ updateFilms }) => {
  let [searchTerm, setSearchTerm] = useState("");
  let [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e) => {
    // updates text in form
    // TODO only do this after search term is >= 2 letters
    // maybe also debounce
    setSearchTerm(e.target.value);
  }

  const handleSubmit = (e) => {
    // prevents form from clearing, URL from resetting
    e.preventDefault();
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setSearchParams(searchParams => {
        searchParams.set("search", searchTerm.toString());
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
      <form onKeyDown={handleKeyDown} onSubmit={handleSubmit}>
        <label htmlFor="search">Search</label>
        <input type="text" id="search" value={searchTerm} onChange={handleChange} />
      </form>
     </div>
   );
};

export default Navigation;
