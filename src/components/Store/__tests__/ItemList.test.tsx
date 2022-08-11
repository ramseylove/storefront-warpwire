import React from "react";
import { render, screen } from "@testing-library/react";
import ItemList from "../ItemList";

describe("itemList", () => {
  test("renders list of items", () => {
    render(<ItemList />);

    screen.getAllByRole();
  });
});
