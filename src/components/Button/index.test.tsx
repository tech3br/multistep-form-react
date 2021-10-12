import { fireEvent, render, screen } from "@testing-library/react";

import { Button } from ".";

describe("<Button />", () => {
  it("should be render button with children correctly", () => {
    render(<Button>Ola mundo</Button>);
    const buttonElement = screen.getByText(/Ola mundo/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it("should be calls onClick prop when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    fireEvent.click(screen.getByText(/click me/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should be render button with outline correctl", () => {
    render(<Button outline>Ola mundo</Button>);
    const buttonElement = screen.getByText(/Ola mundo/i);
    expect(buttonElement).toHaveProperty('outline');
  });
});
