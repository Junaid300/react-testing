import { render, screen } from "@testing-library/react";
import Text from "../Text";

describe("<Text/>", () => {
  /**
   * Getting text of a heading role
   * In Our component, text is Hello world , so content should be Hello World
   */
  test("Rendering Text Componet", () => {
    render(<Text />);
    const getText = screen.getByRole("heading");
    expect(getText).toHaveTextContent(/HELLO WORLD/i);
  });
  test("Hello world should be on the document", () => {
    render(<Text />);
    const getText = screen.getByRole("heading");
    expect(getText).toBeInTheDocument();
  });
});
