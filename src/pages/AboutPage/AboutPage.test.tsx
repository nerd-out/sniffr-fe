import { render, screen } from '@testing-library/react';

import AboutPage from './AboutPage';

describe('AboutPage', () => {
  render(<AboutPage />);
  it('should contain the heading text', () => {
    const headingText = screen.getByText('The people who brought you sniffr:');
    expect(headingText).toBeInTheDocument();
  });
});
