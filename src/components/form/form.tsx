import Button from "../button/Button";
import FormInput from "../formInput/formInput";
import FormStyled from "./formStyled";

const SignUpForm = (): JSX.Element => {
  return (
    <>
      <FormStyled className="form">
        <h2 className="form__title">Register for the event</h2>
        <FormInput
          title="Email"
          inputType="email"
          requiredText="Email is required"
          placeholder="Introduce your email"
        />
        <FormInput
          title="Password"
          inputType="password"
          requiredText="A password is required"
          placeholder="Introduce your password"
        />
        <FormInput
          title="Image"
          inputType="file"
          requiredText="An image is required"
          placeholder="Introduce an image"
        />
        <div className="form__button-container">
          <Button
            text="Sign Up"
            classname="button-container__submit-button submit-button"
          />
        </div>
      </FormStyled>
    </>
  );
};

export default SignUpForm;
