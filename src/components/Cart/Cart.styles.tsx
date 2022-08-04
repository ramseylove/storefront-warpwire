import styled from "styled-components";
import { Button } from "../UI/Button/Button.styles";
type CartWrapperProps = {
  isCartOpen: boolean;
};

export const CartWrapper = styled.div<CartWrapperProps>`
  visibility: ${(props) => (props.isCartOpen ? "visible" : "hidden")};
  width: 420px;
  background-color: rgba(200, 200, 200);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateX(-380px);
  padding: 1rem 0;
  z-index: 30;

  h2 {
    padding-bottom: 1rem;
  }
`;
export const CartHeading = styled.div`
  width: 93%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2px;
`;

export const CartItemWrapper = styled.div`
  background-color: #f6f6f6;
  width: 98%;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-bottom: #404e5c solid 1px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  .controls {
    display: flex;
    align-items: baseline;
    padding: 0 3px;
  }
  .item-quantity {
    padding: 0 7px;
    font-size: 1.5rem;
  }
`;
export const CartButton = styled(Button)`
  font-size: 2.4rem;
`;
