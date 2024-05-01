import { useState, useEffect } from 'react';

const loginUser = (credentials) => {
  return fetch('/login', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify(credentials)
   })
   .then(data => data.json())
   .catch(error => error.json())
}

const Login = ({ setToken, setShowLogIn, setUsername, setMyList }) => {
  const [username, setUserName] = useState(''); // updates username in form
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const result = await loginUser({
      username,
      password
    });

    // user found
    if (result.user) {
      setToken(result);
      setUsername(username); // from props; sets username in nav bar
      setMyList(result.user.myList);
    } else if (result.error) {
      setErrorMessage(result.error.message);
    }
  }

  const handleClose = () => {
    setShowLogIn(false);
  }

  // For accessibility, allow users to esc out of modal
  const handleKeyDown = e => {
    if (e.key === "Escape") {
      setShowLogIn(false);
    }
  }

  return (
    <>
      <div className="modal-wrapper">
      </div>
      <div className="login-modal" onKeyDown={handleKeyDown}>
        <div className="heading">
          <h1>Log In</h1>
          <p className="close" onClick={handleClose}>X</p>
        </div>
        <p className="error">{errorMessage}</p>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Username</p>
            <input type="text" onChange={e => setUserName(e.target.value)} />
          </label>
          <label>
            <p>Password</p>
            <input type="password" onChange={e => setPassword(e.target.value)} />
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login;
