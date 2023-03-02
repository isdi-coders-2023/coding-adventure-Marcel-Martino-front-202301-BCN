import styled from "styled-components";

const ButtonStyled = styled.button`
  width: 100%;
  height: 40px;
  border: none;

  background: var(--color-secondary);
  border-radius: 10px;
  font-family: var(--secondary-font);

  font-size: 20px;
  line-height: 31px;
  letter-spacing: 0.04em;
  color: var(--background-color);

  @media (min-width: 700px) {
    height: 57px;
    width: 100%;
  }
`;
export default ButtonStyled;
