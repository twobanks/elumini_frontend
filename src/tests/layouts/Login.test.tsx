import React from "react" ;
import { fireEvent, screen, waitFor }  from "@testing-library/react";
import Login from "../../layouts/Login";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../render";

describe("login", () => {
  test("login form should be in the document", () => {
    renderWithProviders(<Login />);
    const logoVR = screen.getByRole('img', { name: /vr/i });
    const form = screen.getByRole('form', { name: /login/i });
    const usernameInput = screen.getByRole('textbox', { name: /name/i });
    const passwordInput = screen.getByTestId('password');
    const loginButton = screen.getByRole('button', { name: /^Fazer login$/i });
    expect(logoVR).toBeInTheDocument();
    expect(form).toBeInTheDocument();
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  test("username and password filled in the form", () => {
    renderWithProviders(<Login />);
    const usernameInput = screen.getByRole('textbox', { name: /name/i });
    fireEvent.change(usernameInput, { target: { value: 'username_test' } })
    const passwordInput = screen.getByTestId('password');
    fireEvent.change(passwordInput, { target: { value: 'password_test' } })
    const loginButton = screen.getByRole('button', { name: /^Fazer login$/i });
    expect(loginButton).not.toBeDisabled();
  });

  test("logging in with error", async () => {
    renderWithProviders(<Login />);
    const usernameInput = screen.getByRole('textbox', { name: /name/i });
    fireEvent.change(usernameInput, { target: { value: 'username_test' } })
    const passwordInput = screen.getByTestId('password');
    fireEvent.change(passwordInput, { target: { value: 'password_test' } })
    const loginButton = screen.getByRole('button', { name: /^Fazer login$/i });
    userEvent.click(loginButton);
    await waitFor(() => {
      const passwordInput = screen.getByTestId('error_wrapper');
      expect(passwordInput).toBeInTheDocument();
    });
  });

  test("logging in success", async () => {
    renderWithProviders(<Login />);
    const usernameInput = screen.getByRole('textbox', { name: /name/i });
    fireEvent.change(usernameInput, { target: { value: 'kminchelle' } })
    const passwordInput = screen.getByTestId('password');
    fireEvent.change(passwordInput, { target: { value: '0lelplR' } })
    const loginButton = screen.getByRole('button', { name: /^Fazer login$/i });
    userEvent.click(loginButton);
    await waitFor(() => expect(window.location.href).toContain('/user'));
  });
});