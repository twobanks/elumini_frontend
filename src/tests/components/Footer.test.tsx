import React from "react" ;
import { screen }  from "@testing-library/react";
import { Footer } from "../../components";
import { renderWithProviders } from "../render";

describe("footer", () => {
  test("footer component should be in the document", async () => {
    renderWithProviders(<Footer />);
    const textFooter = screen.getByText('Teste técnico para a vaga de Desenvolvedor Front End SR, realizado por');
    expect(textFooter).toBeInTheDocument();
    const myLink = screen.getByRole('link', { name: 'twobanks' })
    expect(myLink).toHaveAttribute('href', 'https://www.linkedin.com/in/twobanks/');
  });
});