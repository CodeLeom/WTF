import { render, screen } from "@testing-library/react";
import App from './App'


test("renders Review Application on the page", () => {
  render(<App />);
  const headingText = screen.getByText(/review application/i);
  expect(headingText).toBeInTheDocument();
});