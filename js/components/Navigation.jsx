import { useState, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import useToken from '../hooks/useToken';
import Login from './Login.jsx';

const Navigation = ({ updateFilms }) => {
  const { setToken, token } = useToken();
  let [searchTerm, setSearchTerm] = useState('');
  let [searchParams, setSearchParams] = useSearchParams();

  const inputRef = useRef(null);

  const handleSearchClick = (e) => {
    inputRef.current.focus();
  }

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
        <label htmlFor="search" onClick={handleSearchClick}>Search</label>
        <input ref={inputRef} type="text" id="search" value={searchTerm}
          onChange={handleChange} />
      </form>
      {!token ? <Login setToken={setToken} /> : <div><p>Hi, User</p></div>}
     </div>
   );
};

export default Navigation;
