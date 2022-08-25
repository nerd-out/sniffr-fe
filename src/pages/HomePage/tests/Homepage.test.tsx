
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import HomePage from '../HomePage';

describe('HomePage', ()=> {
    it('should render the correct heading text', ()=> {
        render(<Router><HomePage /></Router>);
        const headingText = 'sniffr brings good dogs together to have fun, play fetch, and get a few good scratches';
        
        const sniffrText = screen.getByText(headingText);

        expect(sniffrText).toBeInTheDocument();
    });

    it('should render the header with the correct text', ()=> {
        render(<Router><HomePage /></Router>);
        const headingText = 'find your dog a playmate today';
        
        const sniffrHeader = screen.getByRole('heading', {level: 1} );

        expect(sniffrHeader).toHaveTextContent(headingText);
    });

    it('should render button with Register Now text', ()=> {
        render(<Router><HomePage /></Router>);
        const buttonText = 'Register Now';
        
        const registerNowButton = screen.getByRole('button', { name: buttonText});

        expect(registerNowButton).toBeInTheDocument();
    });
})