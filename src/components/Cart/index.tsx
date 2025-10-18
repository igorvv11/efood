import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button";
import {
  CartContain,
  CartContainer,
  CheckoutContainer,
  Overlay,
  Prices,
  SideBar,
  Titulo,
} from "./styles";

import { RootReducer } from "../../store";
import { Dish } from "../../pages/Perfil";
import { FormattedPrice } from "../Modal";

import { remove, close, clear } from "../../store/reducers/cart";
import Checkout from "../Checkout";
import { usePurchaseMutation } from "../../services/api";

const Cart = () => {
  const [view, setView] = useState<"cart" | "checkout" | "success">("cart");
  const [purchase, { data }] = usePurchaseMutation();

  const { items, isOpen } = useSelector(
    (state: RootReducer) => state.cartSlice
  );

  const dispatch = useDispatch();
  const closeCart = () => {
    dispatch(close());
    setView("cart");
  };

  const removeItem = (item: Dish) => {
    dispatch(remove(item));
  };
  const totalPrices = items.reduce((acc, item) => acc + item.preco, 0);

  const goToCheckout = () => {
    setView("checkout");
  };

  const backToCart = () => {
    setView("cart");
  };

  return (
    <CartContainer className={isOpen ? "is-open" : ""}>
      <Overlay onClick={closeCart} />
      <SideBar>
        {view === "success" && data ? (
          <CheckoutContainer>
            <h3>Pedido realizado - {data?.orderId}</h3>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <br />
            <Button variant="addCart" type="button" onClick={closeCart}>
              Concluir
            </Button>
          </CheckoutContainer>
        ) : view === "checkout" ? (
          <Checkout
            onBackToCart={backToCart}
            purchase={purchase}
            items={items}
            clearCart={() => dispatch(clear())}
            goToSuccess={() => setView("success")}
          />
        ) : items.length > 0 ? (
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
            <Button variant="addCart" type="button" onClick={goToCheckout}>
              Continuar com a entrega
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
