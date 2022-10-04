import { render, screen, } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../../store/store";
import DragonPhoto from "./DragonPhoto";
import * as reduxHooks from 'react-redux';

jest.mock('react-redux');
const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch');

describe ('DragonPhoto component', () => {
    
    test('DragonPhoto render', () => {
        mockedDispatch.mockReturnValue(jest.fn());
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <DragonPhoto 
                        dragon={{name: "ship", flickr_images: "https://i.imgur.com/9fWdwNv.jpg"}}
                        dragonFavorite={false}
                        dragonId='22' 
                    />
                </Provider>
            </MemoryRouter>
        );        
        expect(screen.queryByRole('SimpleImageSlider')).toBeInTheDocument;
        expect(screen.queryByRole('img')).toBeInTheDocument;             
    });
    test('dispatch', () => {
        const dispatch = jest.fn();
        mockedDispatch.mockReturnValue(dispatch);
        
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <DragonPhoto 
                        dragon={{name: "ship", flickr_images: "https://i.imgur.com/9fWdwNv.jpg"}}
                        dragonFavorite={false}
                        dragonId='22' 
                    />
                </Provider>
            </MemoryRouter>
        );
        
        expect(dispatch).toHaveBeenCalled;                     
    });
});