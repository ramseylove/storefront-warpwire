import styled from "styled-components";
type ButtonProps = {
  children?: React.ReactNode;
};

export const Button = styled.button<ButtonProps>`
  background: transparent;
  border: none;
  font-size: 1.9rem;
  cursor: pointer;
`;
