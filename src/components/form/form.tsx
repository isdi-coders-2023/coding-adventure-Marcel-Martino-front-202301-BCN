import Button from "../button/Button";
import FormInput from "../formInput/formInput";

const SignUpForm = (): JSX.Element => {
  return (
    <>
      <h2 className="form__title">Register for the event</h2>
      <form className="register-form">
        <FormInput
          title="Email"
          inputType="email"
          requiredText="Email is required"
          placeholder="Introduce your email"
          classname="email__input"
        />
        <FormInput
          title="Password"
          inputType="password"
          requiredText="A password is required"
          placeholder="Introduce your password"
          classname="password__input"
        />
        <FormInput
          title="Image"
          inputType="file "
          requiredText="An image is required"
          placeholder="Introduce an image"
          classname="file__input"
        />
        <Button text="Sign Up" classname="signUp__button" />
      </form>
    </>
  );
};

export default SignUpForm;
