import React from "react";
import "../../styles/app.scss";
import Filter from "./Filter";

const FilterBar = () => {
  const labels = ["Genre", "Decade", "Director"];

  return (
    <div className="filter-bar">
      <h1>The Criteria Channel</h1>
      <div className ="dropdown-container">
      {labels.map(label =>
          <Filter label={label} />
        )
      }
      </div>
    </div>
  );
}

export default FilterBar;
