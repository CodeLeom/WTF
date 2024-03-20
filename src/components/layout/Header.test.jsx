import { render, screen } from "@testing-library/react";
import Header from "./Header";


test("renders Review Application on the page", () => {
  render(<Header text="Review Application" />);
  const headingText = screen.getByText(/Review Application/i);
  expect(headingText).toBeInTheDocument()
});