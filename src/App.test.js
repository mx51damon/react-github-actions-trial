import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  // Arrange
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);

  // Assert
  expect(linkElement).toBeInTheDocument();
});

test("should match UI with snapshot tests", () => {
  // Arrange
  const { container } = render(<App />);

  // Assert
  expect(container).toMatchSnapshot();
});
