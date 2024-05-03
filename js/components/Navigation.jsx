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
     <>
       <nav className="navigation desktop">
        <div className="left">
          <h1 className="logo">The Criteria Channel</h1>
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
            : <div><p>Hi, {token.username}</p></div>}
        </div>
       </nav>

       <nav className="navigation mobile">
          <svg className="hamburger-icon" xmlns="http://www.w3.org/2000/svg" width="50" height="50"
          viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu hamburger-icon">
          <line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21"
          y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
         <h1 className="logo">The Criteria Channel</h1>
       </nav>
     </>
   );
};

export default Navigation;
