import { render, screen } from "@testing-library/react";
import SignUpForm from "./form";

describe("Given a form component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 3 input fields, one with the label'Image', another with'Email', another with 'Image'", () => {
      render(<SignUpForm />);

      const inputFieldEmail = screen.getByLabelText("Email");
      const inputFieldPassword = screen.getByLabelText("Password");
      const inputFieldImage = screen.getByLabelText("Image");

      expect(inputFieldEmail).toBeInTheDocument();
      expect(inputFieldPassword).toBeInTheDocument();
      expect(inputFieldImage).toBeInTheDocument();
    });
  });
});
