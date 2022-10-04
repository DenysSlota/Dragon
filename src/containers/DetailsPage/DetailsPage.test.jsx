import { render, screen, } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store/store";
import DetailsPage from "./DetailsPage";
import { getApiResource } from '../../utils/network';

jest.mock('../../utils/network');

describe ('Detailspage component', () => {
    let response;
    beforeEach(() => {
        response = {
            data: [
                {
                    "id": 1,
                    "name": "ship"
                }                
            ]
        }
    })
    
    test('Detailspage', () => {
        getApiResource.mockReturnValue(response);
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <DetailsPage />
                </Provider>
            </MemoryRouter>
        );        
        expect(getApiResource).toBeCalled;
        expect(screen.queryByRole('DragonList')).toBeInTheDocument;  
               
    });
})