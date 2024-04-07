const fetchHelper = (endpoint, setStateFn, setServerError) => {
  fetch(endpoint)
  .then(res => res.json())
  .then(data => {
    setStateFn(data);
  })
  .catch(error => {
    setServerError(error);
  })
}

export { fetchHelper };
