import styled from "styled-components";

type StoreItemProps = {
  children?: React.ReactNode;
};

export const StoreItem = styled.div<StoreItemProps>`
  background-color: #f6f6f6;
  width: 100%;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
  &:active {
    outline: lightgray solid 4px;
  }
  .controls {
    margin: 0.8rem;
    display: flex;
    justify-content: space-between;
  }
  .description {
    font-size: 0.75rem;
  }
  h1 {
    font-size: 0.9rem;
  }
  img {
    width: 100%;
    height: 70%;
    object-fit: cover;
    display: inline;
  }
`;

export const ItemListWrapper = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: 300px 300px;
  grid-template-rows: 300px 300px;
  grid-gap: 15px;
`;

export const ItemDetailWrapper = styled.div`
  width: 300px;
  height: 300px;
  background-color: rgba(200, 200, 200);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .controls {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .control-tools {
    width: 150px;
    font-size: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
