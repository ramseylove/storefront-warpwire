import styled from "styled-components";
import { Button } from "../Button/Button.styles";
export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  min-height: 60px;
  margin: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;

  .brand {
    font-size: 1.7rem;
    font-weight: 400;
  }
  .cart {
    position: relative;
  }
  .cart-count {
    font-size: 0.75rem;
    font-weight: 600;
    transform: translate(2px, 22px);
  }
`;

export const CartButton = styled(Button)`
  font-size: 2.4rem;
`;
