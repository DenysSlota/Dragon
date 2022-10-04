import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import LogOut from "./LogOut";

describe ('Logout component', () => {
    
    test('Logout render', () => {
        render(
            <MemoryRouter>
                <LogOut />
            </MemoryRouter>
        );
        const res = screen.findByText(/register/i);
        expect(res).toBeInTheDocument;
        expect(screen.getByRole('link')).toBeInTheDocument;        
    });
    
})