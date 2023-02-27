import SignUpButtonStyled from "./SignUpButtonStyled";

interface ButtonProps {
  text: string;
}

const SignUpButton = ({ text }: ButtonProps): JSX.Element => {
  return (
    <SignUpButtonStyled className="signUpButton">{text}</SignUpButtonStyled>
  );
};

export default SignUpButton;
