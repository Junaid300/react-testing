import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);

  const linkElement = screen.getByRole("button");
  fireEvent.click(linkElement);
  expect(linkElement).toHaveBeenCalledTimes(1);
});
