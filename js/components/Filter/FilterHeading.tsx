const FilterHeading = ({ handleFilterClick}: {handleFilterClick: () => void}) => (
  <div className="lower-modules-heading">
    <h2 id="allFilms" className="listings-header">All Films</h2>
    <button className="filter-cta" onClick={handleFilterClick}>
      filter +
    </button>
  </div>
);

export default FilterHeading;
