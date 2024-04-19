import { useState } from 'react';

// Update to change to userId

const useToken = () => {
  const getToken = () => {
    const tokenString = localStorage.getItem('user');
    const userToken = JSON.parse(tokenString);
    return userToken?.user;
  }

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    localStorage.setItem('user', JSON.stringify(userToken));
    setToken(userToken.user);
  };

  return {
    setToken: saveToken,
    token
  }
}

export default useToken;
