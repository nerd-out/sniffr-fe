import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import RegisterPage from '../RegisterPage';

describe('Register Page', () => {
  it('should have a button', () => {
    render(
      <Router>
        <RegisterPage />
      </Router>
    );
    const button = screen.getByRole('button');
    expect(button).toBeTruthy();
  });

  it('should have a link', () => {
    render(
      <Router>
        <RegisterPage />
      </Router>
    );
    const link = screen.getByRole('link');
    expect(link).toBeTruthy();
  });
});
