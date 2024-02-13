import React from "react";
import "../../styles/app.scss";
import Filter from "./Filter";

const FilterBar = () => {
  const labels = ["Experience", "Languages", "Role"];

  return (
    <div className="filter-bar">
      <h1>AdaMarie Engineering Job Board</h1>
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
