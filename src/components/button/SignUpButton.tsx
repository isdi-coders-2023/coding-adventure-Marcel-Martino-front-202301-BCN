import SignUpButtonStyled from "./SignUpButtonStyled";

interface ButtonProps {
  text: string;
}

const SignUpButton = ({ text }: ButtonProps): JSX.Element => {
  return (
    <SignUpButtonStyled>
      <button className="signUpButton">{text}</button>
    </SignUpButtonStyled>
  );
};

export default SignUpButton;
