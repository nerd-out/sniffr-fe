import AboutPage from './AboutPage';
import { render, screen } from '@testing-library/react';

describe('AboutPage', () => {
  render(<AboutPage />);
  it('should contain the heading text', () => {
    const headingText = screen.getByText('The people who brought you sniffr:');
    expect(headingText).toBeInTheDocument();
  });
});
