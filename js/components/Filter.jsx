import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchHelper } from '../utilities/api';

const Filter = ({ label, dropdownValues, updateFilms }) => {
  const [category, setCategory] = useState('');
  let [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e) => {
    e.preventDefault();
    const categoryVal = e.target.value;

    setCategory(categoryVal);
    const searchParamKey = `${label}Id`;

    setSearchParams(searchParams => {
      searchParams.set(searchParamKey, e.target.value);
      return searchParams;
    })

    // update film listings
    updateFilms();
  }

  return (
    <div className='filter'>
      <p className='label'>{label}</p>
      <select value={category} onChange={handleChange}>
        <option name={label} value={''}>all</option>
        {dropdownValues && dropdownValues.map(item =>
          <option value={item.id} key={item.id}>{item.name}</option>
        )}
      </select>
    </div>
  );
}

export default Filter;
