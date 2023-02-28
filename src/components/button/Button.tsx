import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text: string;
  classname?: string;
}

const Button = ({ text, classname }: ButtonProps): JSX.Element => {
  return <ButtonStyled className={classname}>{text}</ButtonStyled>;
};

export default Button;
