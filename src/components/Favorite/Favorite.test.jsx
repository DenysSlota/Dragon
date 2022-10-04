import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store/store";
import Favorite from './Favorite';
import { useSelector } from 'react-redux';

jest.mock('react-redux');

describe ('Favorite component', () => {
    
    test('Favorite render', () => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <Favorite />
                </Provider>
            </MemoryRouter>
        );        
        expect(screen.queryByRole('img')).toBeInTheDocument;
        expect(screen.queryByRole('span')).toBeInTheDocument;       
    });
    test('count render with empty array', () => {
        useSelector.mockReturnValue([]);
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <Favorite />
                </Provider>
            </MemoryRouter>
        );        
        
        expect(screen.queryByText('0')).toBeInTheDocument;              
    });
    test('count render with array', () => {
        useSelector.mockReturnValue([2, 4]);
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <Favorite />
                </Provider>
            </MemoryRouter>
        );        
        
        expect(screen.queryByText('2')).toBeInTheDocument;              
    });

})