import styled from "styled-components";

const FormStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 14px;

  .form__register-form {
    width: 100%;
  }
  .form__title {
    margin-bottom: 25px;
    font-family: var(--secondary-font);
    font-size: 20px;
    letter-spacing: 0.04em;
    color: var(--color-secondary);
    font-weight: 400;
  }
  .form__input {
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
  }

  input::placeholder {
    letter-spacing: 0.04em;
    color: var(--color-background);
    font-family: var(--primary-font);
    font-size: 16px;
  }

  .input__title {
    font-family: var(--primary-font);
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: var(--color-primary);
  }

  .form__email,
  .form__password,
  .form__file {
    padding-left: 11px;
    margin-top: 9px;
    margin-bottom: 7px;
    width: 100%;
    height: 40px;
    border: 1px solid #ffffff;
    border-radius: 8px;
    background-color: var(--color-primary);
  }

  .form__required-text {
    font-size: 15px;
    color: var(--color-tertiary);
    font-family: var(--primary-font);
  }

  .form__submit-button {
    margin-top: 74px;
  }

  @media (min-width: 700px) {
    margin: 99px;

    .form__title {
      font-size: 40px;
    }
    .form__email,
    .form__password,
    .form__file {
      height: 56px;
      width: 100%;
    }
    .form__required-text {
      margin-bottom: 29px;
    }
  }
`;
export default FormStyled;
