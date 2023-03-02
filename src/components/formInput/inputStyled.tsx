import styled from "styled-components";

const InputStyled = styled.div`
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  .input {
    &__title {
      font-family: var(--primary-font);
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      color: var(--color-primary);
    }

    &__paramater {
      padding-left: 11px;
      margin-top: 9px;
      margin-bottom: 7px;
      width: 100%;
      height: 40px;
      border: 1px solid #ffffff;
      border-radius: 8px;
      background-color: var(--color-primary);
    }

    &__required-text {
      font-size: 15px;
      color: var(--color-tertiary);
      font-family: var(--primary-font);
    }
  }

  @media (min-width: 700px) {
    margin-bottom: 36px;

    .input {
      &__paramater {
        height: 56px;
        width: 100%;
      }
    }
  }
`;

export default InputStyled;
