import Filter from "./Filter";

interface CategoryObject {
  id: string,
  name: string
}

interface FilterBarProps {
  genres: CategoryObject[],
  decades: CategoryObject[],
  directors: CategoryObject[],
  updateFilms: () => void
}

const FilterBar = ({ genres, decades,
  directors, updateFilms }: FilterBarProps) => {
  const labels: string[] = ["genre", "decade", "director"];

  interface DropdownObject {
    [key: string]: CategoryObject[]
  }

  const dropdownTypes: DropdownObject = {
    "genre": genres,
    "decade": decades,
    "director": directors
  }

  return (
    <div className="filter-bar">
      <p className="heading">Filters</p>
      <div className="dropdown-container">
      {labels.map((label: string, i: number) => {
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
