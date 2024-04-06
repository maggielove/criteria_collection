import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FilterBar from '../../js/components/FilterBar';

test('filter bar renders as expected', async () => {
  const genres = [{id: 9, name: "Drama"}, {id: 10, name: "Comedy"},
  {id: 11, name: "Romance"}];
  const decades = [{id: 5, name: "1970s"}, {id: 6, name: "1980s"},
  {id: 14, name: "1990s"}];
  const directors = [{id: 9, name: "Sidney Lumet"}, {id: 10, name: "Mira Nair"}];

  render(
    <Router>
      <FilterBar genres={genres} decades={decades} directors={directors}
    updateFilms={()=> {}} />
    </Router>
  );

  expect(screen.getByText('The Criteria Channel')).toBeInTheDocument();
})
