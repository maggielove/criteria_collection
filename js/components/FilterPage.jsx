import FilterBar from './FilterBar.jsx';
import classNames from 'classnames';

const FilterPage = ({ hidden, directors, genres, decades, updateFilms, toggleFilterPage }) => {
  const filterPageClass=classNames("filter-page", {"hidden": hidden});

   return (
     <div className={filterPageClass}>
      <FilterBar directors={directors ? directors : []} genres={genres ? genres : []}
     decades={decades ? decades : []} updateFilms={updateFilms} />
      <p className="close" onClick={toggleFilterPage}>x</p>
     </div>
   );
};

export default FilterPage;