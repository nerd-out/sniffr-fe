import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import DogProfileSettingsPage from './DogProfileSettingsPage';

describe('Dog Settings Page', () => {
  it('should have a button', () => {
    render(
      <Router>
        <DogProfileSettingsPage />
      </Router>
    );
    const button = screen.getByTestId('submit-button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Submit')
  });

  it('should have a name input', () => {
    render(
      <Router>
        <DogProfileSettingsPage />
      </Router>
    );

    const nameInput = screen.getByTestId('pet-name-input');
    expect(nameInput).toBeInTheDocument();
    expect(nameInput).toBeRequired();
    expect(nameInput)
    
  });
});
