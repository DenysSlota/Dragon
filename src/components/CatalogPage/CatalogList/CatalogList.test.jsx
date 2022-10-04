import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CatalogList from "./CatalogList";

const catalog = [{name: "Dragon", id: "asd12", flickr_images: "https://i.imgur.com/9fWdwNv.jpg"},
                {name: "Dragon1", id: "asd15", flickr_images: "https://i.imgur.com/8fWdwNv.jpg"}];



describe ('CatalogList component', () => {
    test('CatalogList renders', () => {
        render(
            <MemoryRouter>
                <CatalogList catalog={catalog} />
            </MemoryRouter>
        );
        expect(screen.getByRole('list')).toBeInTheDocument;
        expect(screen.getAllByRole('img')).toBeInTheDocument;
        expect(screen.getAllByRole('link')).toBeInTheDocument;
        expect(screen.getAllByText(/dragon/i)).toBeInTheDocument;
    });

})