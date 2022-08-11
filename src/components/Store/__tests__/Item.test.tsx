import { render, screen } from "@testing-library/react";
import { ShoppingCartProvider } from "../../../store/ShoppingCartContext";
import { useShoppingCart } from "../../../store/ShoppingCartContext";
import Item from "../Item";

const cardProps = {
  id: 1,
  itemName: "3/4inch Maple plywood",
  description: "Beautiful for cabinets",
};

describe("Card", () => {
  render(
    <ShoppingCartProvider>
      <Item {...cardProps} />
    </ShoppingCartProvider>
  );

  test("should show text in card", () => {});
});
