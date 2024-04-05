import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Filter from '../../js/components/FilterBar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

test('filter value updates on click', async () => {
  const genres = [{id: 1, name: "Drama"}, {id: 2, name: "Comedy"},
  {id: 3, name: "Romance"}];

  render(
    <Router>
      <Filter label="Genre" dropdownValues={genres} updateFilms={()=> {}} />
    </Router>
  );

  //narrow to genre
  await userEvent.click(screen.getByDisplayValue('all'))

  await userEvent.click(screen.getByText('Drama'))

  expect(screen.getByDisplayValue('Drama')).toHaveTextContent('Drama')
})
