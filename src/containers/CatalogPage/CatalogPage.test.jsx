import { render, screen, } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CatalogPage from './CatalogPage';
import { getApiResource } from '../../utils/network';

jest.mock('../../utils/network');

describe ('Catalogpage component', () => {
    let response;
    beforeEach(() => {
        response = {
            data: [
                {
                    "id": 1,
                    "name": "ship"
                },
                {
                    "id": 2,
                    "name": "dragon"
                }
            ]
        }
    })
    
    test('Catalogpage', () => {
        getApiResource.mockReturnValue(response);
        render(
            <MemoryRouter>
                <CatalogPage />
            </MemoryRouter>
        );        
        expect(getApiResource).toBeCalled;
        expect(screen.queryByRole('CatalogList')).toBeInTheDocument;  
               
    });
})