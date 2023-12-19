import React from "react" ;
import { fireEvent, screen, waitFor }  from "@testing-library/react";
import { UserBox } from "../../components";
import { renderWithProviders } from "../render";

describe("loginUserBox", () => {
  test("UserBox component should be in the document", async () => {
    renderWithProviders(<UserBox />);
    const userBoxWrapper = screen.getByTestId('box_user_wrapper');
    const avatar = screen.getByRole('img', { name: /avatar/i });
    const challenge = screen.getByRole('link', { name: /challenge/i });
    const users = screen.getByRole('link', { name: /users/i });
    const button = screen.getByRole('button', { name: /logout/i });
    expect(userBoxWrapper).toBeInTheDocument();
    expect(avatar).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(challenge).toBeInTheDocument();
    expect(users).toBeInTheDocument();
  });
  test("testing exit button", async () => {
    renderWithProviders(<UserBox />);
    const button = screen.getByRole('button', { name: /logout/i });
    fireEvent.click(button);
    await waitFor(() => expect(window.location.href).toContain('/'));
  });
});