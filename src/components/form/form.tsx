import Button from "../button/Button";
import FormInput from "../formInput/formInput";
import FormStyled from "./formStyled";

const SignUpForm = (): JSX.Element => {
  return (
    <>
      <FormStyled className="form">
        <h2 className="form__title">Register for the event</h2>
        <form className="form__register-form">
          <FormInput
            title="Email"
            inputType="email"
            requiredText="Email is required"
            placeholder="Introduce your email"
            classname="form__email"
          />
          <FormInput
            title="Password"
            inputType="password"
            requiredText="A password is required"
            placeholder="Introduce your password"
            classname="form__password"
          />
          <FormInput
            title="Image"
            inputType="file"
            requiredText="An image is required"
            placeholder="Introduce an image"
            classname="form__file"
          />
          <Button
            text="Sign Up"
            classname="form__submit-button submit-button"
          />
        </form>
      </FormStyled>
    </>
  );
};

export default SignUpForm;
