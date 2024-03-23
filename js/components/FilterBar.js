import React from "react";
import "../../styles/app.scss";
import Filter from "./Filter";

const FilterBar = ({ genres, decades, directors }) => {
  const labels = ["Genre", "Decade", "Director"];
  const dropdownTypes = {
    "Genre": genres,
    "Decade": decades,
    "Director": directors
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
