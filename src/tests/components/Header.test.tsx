import React from "react" ;
import { screen }  from "@testing-library/react";
import { Header } from "../../components";
import { renderWithProviders } from "../render";

describe("header", () => {
  test("header component should be in the document", async () => {
    renderWithProviders(<Header />);
    const logoVR = screen.getByRole('img', { name: /vr/i });
    expect(logoVR).toBeInTheDocument();
    const logoElumini = screen.getByRole('img', { name: /elumini/i });
    expect(logoElumini).toBeInTheDocument();
    const link = screen.getByRole('link', { name: /login/i });
    expect(link).toBeInTheDocument();
  });
});