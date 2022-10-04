import { render, screen, fireEvent, } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store/store";

import Login from './Login';

describe ('Login component', () => {
    
    test('Login render', () => {
        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        );        
        expect(screen.getByText(/registration/i)).toBeInTheDocument;
        expect(screen.queryByRole('label')).toBeInTheDocument;
        expect(screen.queryAllByRole('input')).toBeInTheDocument;        
    });
    test('Login input firstname', () => {
        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        );
        const input = screen.getByPlaceholderText(/first name/i);
        fireEvent.input(input, {
            target: {value: 'jhon'}
        })        
        expect(screen.queryByText(/jhon/i)).toBeInTheDocument;
        fireEvent.input(input, {
            target: {value: 'jh'}
        })        
        expect(screen.queryByText(/min 3 symbol/i)).toBeInTheDocument;
                
    });
    test('Login input lastname', () => {
        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        );
        const input = screen.getByPlaceholderText(/last name/i);
        fireEvent.input(input, {
            target: {value: 'smith'}
        })        
        expect(screen.queryByText(/smith/i)).toBeInTheDocument;
        fireEvent.input(input, {
            target: {value: 'sm'}
        })        
        expect(screen.queryByText(/min 3 symbol/i)).toBeInTheDocument;
                
    });
    test('Login input login', () => {
        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        );
        const input = screen.getByPlaceholderText(/login/i);
        fireEvent.input(input, {
            target: {value: 'jhon'}
        })        
        expect(screen.queryByText(/jhon/i)).toBeInTheDocument;
        fireEvent.input(input, {
            target: {value: ''}
        })        
        expect(screen.queryByText(/min 3 symbol/i)).toBeInTheDocument;
        fireEvent.input(input, {
            target: {value: 'jhonnnnnnnnnnnn'}
        })        
        expect(screen.queryByText(/max 10 symbol/i)).toBeInTheDocument;
                
    });
    test('Login input password', () => {
        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        );
        const input = screen.getByPlaceholderText(/password/i);
        fireEvent.input(input, {
            target: {value: '123456'}
        })        
        expect(screen.queryByText(/123456/i)).toBeInTheDocument;
        fireEvent.input(input, {
            target: {value: '111'}
        })        
        expect(screen.queryByText(/min 4 symbol/i)).toBeInTheDocument;
        fireEvent.input(input, {
            target: {value: '123456789123'}
        })        
        expect(screen.queryByText(/max 10 symbol/i)).toBeInTheDocument;                
    });
    test('Login input email', () => {
        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        );
        const input = screen.getByPlaceholderText(/email/i);
        fireEvent.input(input, {
            target: {value: 'test@test.io'}
        })        
        expect(screen.queryByText(/test@test.io/i)).toBeInTheDocument;
        fireEvent.input(input, {
            target: {value: 'test'}
        })        
        expect(screen.queryByText(/invalid email address/i)).toBeInTheDocument;
        fireEvent.input(input, {
            target: {value: 'test@test'}
        })        
        expect(screen.queryByText(/invalid email address/i)).toBeInTheDocument;                
    });
    test('Login input tel', () => {
        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        );
        const input = screen.getByPlaceholderText(/tel/i);
        fireEvent.input(input, {
            target: {value: '1234567890'}
        })        
        expect(screen.queryByText(/1234567890/i)).toBeInTheDocument;
        fireEvent.input(input, {
            target: {value: '111'}
        })        
        expect(screen.queryByText(/min 8 symbol/i)).toBeInTheDocument;
        fireEvent.input(input, {
            target: {value: '123456789123'}
        })        
        expect(screen.queryByText(/max 11 symbol/i)).toBeInTheDocument;                
    });
    test('Login submit reset', () => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <Login />
                </Provider>
            </MemoryRouter>
        );
        const inputFirstName = screen.getByPlaceholderText(/first name/i);
        fireEvent.input(inputFirstName, {
            target: {value: 'jhon'}
        });
        const inputLastName = screen.getByPlaceholderText(/last name/i);
        fireEvent.input(inputLastName, {
            target: {value: 'smith'}
        });        
        const inputLogin = screen.getByPlaceholderText(/login/i);
        fireEvent.input(inputLogin, {
            target: {value: 'jhon'}
        });
        const inputPassword = screen.getByPlaceholderText(/password/i);
        fireEvent.input(inputPassword, {
            target: {value: '123456'}
        });
        const inputEmail = screen.getByPlaceholderText(/email/i);
        fireEvent.input(inputEmail, {
            target: {value: 'test@test.io'}
        });
        const inputTel = screen.getByPlaceholderText(/tel/i);
        fireEvent.input(inputTel, {
            target: {value: '123456'}
        });
        const submit = screen.queryByTestId('submit');
        expect(submit).toBeDisabled;

        fireEvent.input(inputTel, {
            target: {value: '1234567890'}
        })
        userEvent.click(submit);
        expect(screen.queryByText(/jhon/i)).not.toBeInTheDocument;
                
    });
    
})