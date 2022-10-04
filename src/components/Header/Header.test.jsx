import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store/store";
import { MemoryRouter } from "react-router-dom";
import Header from './Header';

describe ('Header component', () => {
    
    test('Header render', () => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <Header />
                </Provider>
            </MemoryRouter>
        );        
        expect(screen.getByText(/home/i)).toBeInTheDocument;
        expect(screen.queryByRole('list')).toBeInTheDocument;
        expect(screen.queryAllByRole('img')).toBeInTheDocument;       
    });
    
})