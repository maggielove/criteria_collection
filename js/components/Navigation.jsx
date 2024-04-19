import { useEffect, useState, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import useToken from '../hooks/useToken';

const Navigation = ({ updateFilms, onSignIn, token, username }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
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
      <div className="left">
        <h1>The Criteria Channel</h1>
        <a href="/">Now Playing</a>
        <a href="#allFilms">All Films</a>
        <form onKeyDown={handleKeyDown} onSubmit={handleSubmit}>
          <label htmlFor="search" onClick={handleSearchClick}>Search</label>
          <input ref={inputRef} type="text" id="search" value={searchTerm}
            onChange={handleChange} />
        </form>
      </div>

      <div className="right">
        {!token ? <p className="sign-in" onClick={onSignIn}>Sign in</p>
          : <div><p>Hi, {username}</p></div>}
      </div>
     </div>
   );
};

export default Navigation;
