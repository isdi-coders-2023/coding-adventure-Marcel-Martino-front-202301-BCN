interface FormInputProps {
  title: string;
  placeholder: string;
  requiredText: string;
  inputType: string;
  classname: string;
  action?: () => {};
}

const FormInput = ({
  title,
  placeholder,
  requiredText,
  inputType,
  classname,
  action,
}: FormInputProps): JSX.Element => {
  return (
    <div>
      <label htmlFor={title} className="input__title">
        {title}
      </label>
      <input
        id={title}
        className={classname}
        type={inputType}
        placeholder={placeholder}
        onChange={action}
      ></input>
      <h2>{requiredText}</h2>
    </div>
  );
};

export default FormInput;
