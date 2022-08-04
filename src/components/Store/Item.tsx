import { useShoppingCart } from "../../store/ShoppingCartContext";
import { StoreItem } from "./Store.styles";
import { Button } from "../UI/Button/Button.styles";
import { GrAdd } from "react-icons/gr";
import ItemDetail from "./ItemDetail";

interface ItemProps {
  id: number;
  itemName: string;
  description: string;
  onShow: (id: number) => void;
  showDetailPage: number | null;
}

const Item = ({
  id,
  itemName,
  description,
  onShow,
  showDetailPage,
}: ItemProps) => {
  const { increaseItemQuantity } = useShoppingCart();
  const handleOnShow = (itemId: number) => {
    onShow(itemId);
  };
  return (
    <>
      <StoreItem onClick={() => handleOnShow(id)}>
        <img src="/imgs/wood.jpg" alt={itemName} />
        <div className="controls">
          <div className="details">
            <h1 className="title">{itemName}</h1>
            <div className="description">{description}</div>
          </div>
          <Button onClick={() => increaseItemQuantity(id)}>
            <GrAdd />
          </Button>
        </div>
        {showDetailPage === id ? (
          <ItemDetail id={id} itemName={itemName} description={description} />
        ) : null}
      </StoreItem>
    </>
  );
};

export default Item;
