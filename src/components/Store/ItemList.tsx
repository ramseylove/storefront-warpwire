import Item from "./Item";

import items from "../../data/itemData.json";
import { ItemListWrapper } from "./Store.styles";
import { useState } from "react";

const ItemList = () => {
  const [showDetailPage, setShowDetailPage] = useState<number | null>(null);

  const toggleShowDetailsPage = (id: number) => {
    if (showDetailPage == null || showDetailPage !== id) {
      setShowDetailPage(id);
    } else if (showDetailPage === id) {
      return;
    } else {
      setShowDetailPage(null);
    }
  };
  return (
    <ItemListWrapper>
      {items.map((item) => (
        <Item
          {...item}
          key={item.id}
          onShow={toggleShowDetailsPage}
          showDetailPage={showDetailPage}
        />
      ))}
    </ItemListWrapper>
  );
};

export default ItemList;
