import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HomePage from './HomePage';

describe ('HomePage component', () => {
    
    test('HomePage render', () => {
        render(
            <MemoryRouter>
                <HomePage />
            </MemoryRouter>
        );        
        expect(screen.getByText(/spacex/i)).toBeInTheDocument;
        expect(screen.queryByRole('img')).toBeInTheDocument;
        expect(screen.getByAltText(/dragon/i)).toBeInTheDocument;       
    });
    
})