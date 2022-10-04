import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ErrorMessage from './ErrorMessage';

describe ('Errormessage component', () => {
    
    test('Errormessage render', () => {
        render(
            <MemoryRouter>
                <ErrorMessage />
            </MemoryRouter>
        );        
        expect(screen.getByText(/display/i)).toBeInTheDocument;
        expect(screen.queryByRole('p')).toBeInTheDocument;       
    });
    
})