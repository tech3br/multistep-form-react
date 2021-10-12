import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders h1 title", () => {
  render(<App />);
  const linkElement = screen.getByText(/Vamos começar com seu nome/i);
  expect(linkElement).toBeInTheDocument();
});
