import React from "react";

const Filter = ({ label, dropdownValues }) => {

  return (
    <div className="filter">
      <p>{label}</p>
      <select>
        <option value="frontend">all</option>
        {dropdownValues && dropdownValues.map(item =>
          <option value="frontend">{item.name}</option>
        )}
      </select>
    </div>
  );
}

export default Filter;
