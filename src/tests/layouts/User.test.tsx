import React from "react" ;
import { screen }  from "@testing-library/react";
import { renderWithProviders } from "../render";
import User from "../../layouts/User";

describe("user", () => {
  test("user component should be in the document", async () => {
    renderWithProviders(<User />);
    const containerWrapper = screen.getByTestId('container');
    const headerWrapper = screen.getByTestId('header');
    const footerWrapper = screen.getByTestId('footer');
    expect(containerWrapper).toBeInTheDocument();
    expect(headerWrapper).toBeInTheDocument();
    expect(footerWrapper).toBeInTheDocument();
  });
});