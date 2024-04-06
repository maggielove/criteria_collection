import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Filter from '../../js/components/FilterBar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

test('filter labels render as expected', async () => {
  const genres = [{id: 9, name: "Drama"}, {id: 10, name: "Comedy"},
  {id: 11, name: "Romance"}];

  render(
    <Router>
      <Filter />
    </Router>
  );

  expect(screen.getByText('genre')).toBeInTheDocument();
  expect(screen.getByText('director')).toBeInTheDocument();
  expect(screen.getByText('decade')).toBeInTheDocument();
})

// test('filter value updates on click', async () => {
//   const genres = [{id: 9, name: "Drama"}, {id: 10, name: "Comedy"},
//   {id: 11, name: "Romance"}];
//
//   render(
//     <Router>
//       <Filter />
//     </Router>
//   );


  // expect(screen.getByRole('option', { name: 'genre' })).toHaveValue('');

  // await userEvent.click(screen.getByDisplayValue('all'))
  // await userEvent.click(screen.getByText('Comedy'))

  // expect(screen.getByRole('option', { name: 'genre' })).toHaveValue('Comedy');
// })
// add filter value updates on click
//narrow to genre
