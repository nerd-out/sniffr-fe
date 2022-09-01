import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import DogProfileSettingsPage from './DogProfileSettingsPage';

describe('Dog Settings Page', () => {
  it('should have a submit button', () => {
    render(
      <Router>
        <DogProfileSettingsPage />
      </Router>
    );
    const button = screen.getByTestId('submit-button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Submit');
  });

  it('should have a name input', () => {
    render(
      <Router>
        <DogProfileSettingsPage />
      </Router>
    );

    const nameInput = screen.getByRole('textbox', { name: 'Name' });
    expect(nameInput).toBeInTheDocument();
    expect(nameInput).toBeRequired();
  });

  it('should have radiogroups', () => {
    render(
      <Router>
        <DogProfileSettingsPage />
      </Router>
    );
    const radios = screen.getAllByRole('radiogroup');
    expect(radios).toHaveLength(4);
  });

  it('should have radios', () => {
    render(
      <Router>
        <DogProfileSettingsPage />
      </Router>
    );
    const radios = screen.getAllByRole('radio');
    expect(radios).toHaveLength(9);
  });

  it('should have a header', () => {
    render(
      <Router>
        <DogProfileSettingsPage />
      </Router>
    );
    const header = screen.getByTestId('dog-settings-header');
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent('Create Dog');
  });

  it('should have Breed drop down', () => {
    render(
      <Router>
        <DogProfileSettingsPage />
      </Router>
    );

    const breed = screen.getByRole('button', { name: "Breed ​" });
    expect(breed).toBeInTheDocument();
  })

  it('should have Age drop down', () => {
    render(
      <Router>
        <DogProfileSettingsPage />
      </Router>
    );

    const age = screen.getByRole('button', { name: "Age ​" });
    expect(age).toBeInTheDocument();
  })

  
});
