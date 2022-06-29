import React from "react";
import { useShoppingCart } from "../../store/ShoppingCartContext";
import storeItems from "../../data/itemData.json";
import { CartItemWrapper } from "./Cart.styles";
import { Button } from "../UI/Button/Button.styles";
import { GrFormTrash } from "react-icons/gr";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const {
    getItemQuantity,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeFromCart,
  } = useShoppingCart();

  const item = storeItems.find((i) => i.id === id);
  if (!item || item == null) return null;
  return (
    <CartItemWrapper>
      <div className="controls">
        <Button onClick={() => decreaseItemQuantity(item.id)}>-</Button>
        <div className="item-quantity">{getItemQuantity(item.id)}</div>
        <Button onClick={() => increaseItemQuantity(item.id)}>+</Button>
      </div>
      <p>{item.itemName}</p>

      <Button onClick={() => removeFromCart(item.id)}>
        <GrFormTrash />
      </Button>
    </CartItemWrapper>
  );
};

export default CartItem;
