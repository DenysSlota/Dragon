import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../store/store";
import { MemoryRouter } from "react-router-dom";
import DragonList from "./DragonList";

const dragon = {
    id: 23,                
    name: "ship",
    image: "https://i.imgur.com/9fWdwNv.jpg",
    description: "detail",
    wikipedia: "wikipedia",
    height: 1000,
    mass: 500,
    year: 2022,
};

describe ('DragonList component', () => {
    test('DragonList renders', () => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <DragonList dragon={dragon} dragonId={dragon.id} />
                </Provider>
            </MemoryRouter>
        );
        expect(screen.getByRole('list')).toBeInTheDocument();        
        expect(screen.getAllByRole('link')).toBeInTheDocument;
        expect(screen.getByText(/ship/i)).toBeInTheDocument;
    });

})