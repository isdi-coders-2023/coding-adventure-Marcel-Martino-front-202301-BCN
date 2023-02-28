import { render, screen } from "@testing-library/react";
import Button from "./SignUpButton";

describe("Given a button component", () => {
  describe("When rendered with the text 'Sign Up'", () => {
    test("Then it should render a button with the text 'Sign Up'", () => {
      const signUpButtonText = "Sign Up";

      render(<Button text={signUpButtonText} />);

      const button = screen.getByRole("button", { name: "Sign Up" });

      expect(button).toBeInTheDocument();
    });
  });
});
