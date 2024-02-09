import React from "react";

const Filter = ({ label }) => {

  return (
    <div className="filter">
      <p>{label}</p>
      <select>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="fullstack">Fullstack</option>
      </select>
    </div>
  );
}

export default Filter;
