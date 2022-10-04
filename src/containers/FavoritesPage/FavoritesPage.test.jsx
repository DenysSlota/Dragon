import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store/store";
import FavoritesPage from "./FavoritesPage";
import { useSelector } from 'react-redux';

jest.mock('react-redux');

describe ('Favoritespage component', () => {
    
    test('Favoritespage render', () => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <FavoritesPage />
                </Provider>
            </MemoryRouter>
        );        
        expect(screen.queryByText(/favorites/i)).toBeInTheDocument;             
    });
    test('render with empty array', () => {
        useSelector.mockReturnValue([]);
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <FavoritesPage />
                </Provider>
            </MemoryRouter>
        );        
        
        expect(screen.queryByText(/no data/i)).toBeInTheDocument;              
    });
    test('count render with array', () => {
        useSelector.mockReturnValue([22, {name: "ship", flickr_images: "https://i.imgur.com/9fWdwNv.jpg"}]);
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <FavoritesPage />
                </Provider>
            </MemoryRouter>
        );        
        
        expect(screen.queryByRole('CatalogList')).toBeInTheDocument;              
    });

})