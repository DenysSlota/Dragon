import { render, screen, } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "../../store/store";

import DragonPage from "./DragonPage";
import { getApiResource } from '../../utils/network';

jest.mock('../../utils/network');

describe ('Dragonpage component', () => {
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
    
    test('Dragonpage', () => {
        getApiResource.mockReturnValue(response);
        render(
            <MemoryRouter>
                <DragonPage />
            </MemoryRouter>
        );        
        expect(getApiResource).toBeCalled;
        expect(screen.queryByRole('DragonList')).toBeInTheDocument;  
               
    });
})