import Item from "./Item";

import items from "../../data/itemData.json";
import { ItemListWrapper } from "./Store.styles";

const ItemList = () => {
  return (
    <ItemListWrapper>
      {items.map((item) => (
        <Item {...item} key={item.id} />
      ))}
    </ItemListWrapper>
  );
};

export default ItemList;
