import { useShoppingCart } from "../../../store/ShoppingCartContext";
import Cart from "../../Cart/Cart";
import { GrCart } from "react-icons/gr";
import { CartButton } from "../../Cart/Cart.styles";
import { HeaderWrapper } from "./Header.styles";

const Header = () => {
  const { cartQuantity, toggleCart } = useShoppingCart();
  console.count("header render");
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
