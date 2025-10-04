import { useDispatch, useSelector } from "react-redux";
import Button from "../Button";
import {
  CartContain,
  CartContainer,
  Overlay,
  Prices,
  SideBar,
  Titulo,
} from "./styles";

import { RootReducer } from "../../store";
import { Dish } from "../../pages/Perfil";
import { FormattedPrice } from "../Modal";

import { remove, close } from "../../store/reducers/cart";

const Cart = () => {
  const { items, isOpen } = useSelector(
    (state: RootReducer) => state.cartSlice
  );

  const dispatch = useDispatch();
  const closeCart = () => {
    dispatch(close());
  };

  const removeItem = (item: Dish) => {
    dispatch(remove(item));
  };
  const totalPrices = items.reduce((acc, item) => acc + item.preco, 0);

  return (
    <CartContainer className={isOpen ? "is-open" : ""}>
      <Overlay onClick={closeCart} />
      <SideBar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <CartContain key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <Titulo>{item.nome}</Titulo>
                    <p>{FormattedPrice(item.preco)}</p>
                  </div>
                  <button onClick={() => removeItem(item)} />
                </CartContain>
              ))}
            </ul>
            <Prices>
              Valor total <span>{FormattedPrice(totalPrices)} </span>
            </Prices>
            <Button variant="addCart" to="#" type="button">
              Finalizar pedido
            </Button>
          </>
        ) : (
          <Prices className="empty-cart">
            O carrinho está vazio. Adicione pelo menos um produto para continuar
            com a compra.
          </Prices>
        )}
      </SideBar>
    </CartContainer>
  );
};

export default Cart;
