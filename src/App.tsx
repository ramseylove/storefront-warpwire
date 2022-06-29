import { MainWrapper } from "./App.styles";
import ItemList from "./components/Store/ItemList";
import Header from "./components/UI/Header/Header";

import { ShoppingCartProvider } from "./store/ShoppingCartContext";

const App = () => {
  return (
    <ShoppingCartProvider>
      <Header />

      <MainWrapper>
        <ItemList />
      </MainWrapper>
    </ShoppingCartProvider>
  );
};

export default App;
