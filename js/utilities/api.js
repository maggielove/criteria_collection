const fetchHelper = (endpoint, setStateFn) => {
  fetch(endpoint)
  .then(res => res.json())
  .then(data => {
    setStateFn(data);
  })
}

export { fetchHelper };
