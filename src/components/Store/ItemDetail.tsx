import React from "react";
import { ItemDetailWrapper } from "./Store.styles";
import { Button } from "../UI/Button/Button.styles";
import { useShoppingCart } from "../../store/ShoppingCartContext";

type ItemDetailProps = {
  id: number;
  itemName: string;
  description: string;
};

const ItemDetail = ({ id, itemName, description }: ItemDetailProps) => {
  const { increaseItemQuantity, decreaseItemQuantity, getItemQuantity } =
    useShoppingCart();

  return (
    <ItemDetailWrapper>
      <div className="content">
        <h2>{itemName}</h2>
        <p className="description">Description: {description}</p>
      </div>
      <div className="controls">
        <div className="controls-heading">Add to Cart</div>
        <div className="control-tools">
          <Button onClick={() => decreaseItemQuantity(id)}>-</Button>
          <div className="item-quantity">{getItemQuantity(id)}</div>
          <Button onClick={() => increaseItemQuantity(id)}>+</Button>
        </div>
      </div>
    </ItemDetailWrapper>
  );
};

export default ItemDetail;
