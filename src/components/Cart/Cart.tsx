import { useShoppingCart } from "../../store/ShoppingCartContext";

import CartItem from "./CartItem";

import { CartHeading, CartWrapper } from "./Cart.styles";

const Cart = () => {
  const { cartItems, isCartOpen } = useShoppingCart();
  console.count("cart render");
  return (
    <CartWrapper isCartOpen={isCartOpen}>
      <CartHeading>
        <p>Qty</p>
        <p>Item</p>
        <p>Remove</p>
      </CartHeading>

      {cartItems.length === 0 ? (
        <h3>No items in your cart</h3>
      ) : (
        cartItems.map((item) => <CartItem key={item.id} {...item} />)
      )}
    </CartWrapper>
  );
};

export default Cart;
