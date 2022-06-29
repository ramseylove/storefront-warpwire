import Cart from "../../Cart/Cart";
import { useShoppingCart } from "../../../store/ShoppingCartContext";
import { GrCart } from "react-icons/gr";
import { HeaderWrapper, CartButton } from "./Header.styles";

const Header = () => {
  const { toggleCart, cartQuantity } = useShoppingCart();

  return (
    <HeaderWrapper>
      <div className="brand">The WoodStore</div>
      <div className="cart">
        <CartButton onClick={() => toggleCart()}>
          <div className="cart-count">{cartQuantity}</div>
          <GrCart />
        </CartButton>
        <Cart />
      </div>
    </HeaderWrapper>
  );
};

export default Header;
