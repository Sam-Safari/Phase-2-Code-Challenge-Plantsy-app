import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import App from '../App'; // Fixed import path
import '@testing-library/jest-dom';

describe('4th Deliverable', () => {
  test('filters plants by name on search', async () => {
    global.setFetchResponse(global.basePlants);

    const { getByPlaceholderText, queryAllByTestId } = render(<App />);
    const searchInput = getByPlaceholderText('Type a name to search...');

    // Filter by 'aloe'
    fireEvent.change(searchInput, { target: { value: 'aloe' } });
    await waitFor(() => {
      const filteredPlants = queryAllByTestId('plant-item');
      expect(filteredPlants).toHaveLength(1);
    });

    // Filter by 'p'
    fireEvent.change(searchInput, { target: { value: 'p' } });
    await waitFor(() => {
      const filteredPlants = queryAllByTestId('plant-item');
      expect(filteredPlants).toHaveLength(3);
    });
  });
});