import InputStyled from "./inputStyled";

interface FormInputProps {
  title: string;
  placeholder: string;
  requiredText: string;
  inputType: string;
  action?: () => {};
}

const FormInput = ({
  title,
  placeholder,
  requiredText,
  inputType,
  action,
}: FormInputProps): JSX.Element => {
  return (
    <InputStyled className="input">
      <label htmlFor={title} className="input__title">
        {title}
      </label>
      <input
        id={title}
        className="input__paramater"
        type={inputType}
        placeholder={placeholder}
        onChange={action}
      ></input>
      <span className="input__required-text">{requiredText}</span>
    </InputStyled>
  );
};

export default FormInput;
