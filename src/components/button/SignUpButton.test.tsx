import { render, screen } from "@testing-library/react";
import Button from "./SignUpButton";

describe("Given a button component", () => {
  describe("When rendered with the text 'Sign Up'", () => {
    test("Then it should render a button with the text 'Sign Up'", () => {
      render(<Button text="Sign Up" />);

      const button = screen.getByRole("button", { name: "Sign Up" });
      expect(button).toBeInTheDocument();
    });
  });
});
