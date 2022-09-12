import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from './Layout';

describe('Layout', () => {
  it('should render', () => {
    render(
      <Router>
        <Layout />
      </Router>
    );
    const sniffr = screen.findByText('sniffr')
    expect(sniffr).toBeTruthy();
  });
});