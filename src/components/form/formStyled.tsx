import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  margin: 14px;

  .form {
    width: 100%;
    &__title {
      margin-bottom: 25px;
      font-family: var(--secondary-font);
      font-size: 20px;
      letter-spacing: 0.04em;
      color: var(--color-secondary);
      font-weight: 400;
    }

    &__submit-button {
      margin-top: 54px;
    }
  }
  .form__button-container {
    display: flex;
    justify-content: center;
  }
  input::placeholder {
    letter-spacing: 0.04em;
    color: var(--color-background);
    font-family: var(--primary-font);
    font-size: 16px;
  }

  @media (min-width: 700px) {
    margin: 99px;
    .form {
      &__title {
        font-size: 40px;
      }
    }
  }
`;
export default FormStyled;
