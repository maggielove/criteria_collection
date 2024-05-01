import "../../../styles/app.scss";
import Filter from "./Filter";

const FilterBar = ({ genres, decades, directors, updateFilms }) => {
  const labels = ["genre", "decade", "director"];
  const dropdownTypes = {
    "genre": genres,
    "decade": decades,
    "director": directors
  }

  return (
    <div className="filter-bar">
      <p className="heading">Filters</p>
      <div className="dropdown-container">
      {labels.map((label, i) => {
          const dropdownValues=dropdownTypes[label];
          return <Filter label={label} key={i} dropdownValues={dropdownValues}
          updateFilms={updateFilms} />
        })
      }
      </div>
    </div>
  );
}

export default FilterBar;
