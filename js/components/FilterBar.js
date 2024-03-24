import React from "react";
import "../../styles/app.scss";
import Filter from "./Filter";

const FilterBar = ({ genres, decades, directors }) => {
  const labels = ["genre", "decade", "director"];
  const dropdownTypes = {
    "genre": genres,
    "decade": decades,
    "director": directors
  }

  return (
    <div className="filter-bar">
      <h1>The Criteria Channel</h1>
      <div className ="dropdown-container">
      {labels.map((label, i) => {
          const dropdownValues=dropdownTypes[label];
          return <Filter label={label} key={i} dropdownValues={dropdownValues} />
        })
      }
      </div>
    </div>
  );
}

export default FilterBar;
