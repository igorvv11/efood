import { GalleryItem } from "../../pages/Perfil";
import close from "../../assets/images/close.png";
import { ModalContain, ModalContainer, ModalContent } from "./styles";
import Button from "../Button";

import { useDispatch } from "react-redux";

import { add, open } from "../../store/reducers/cart";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  dish: GalleryItem;
};

export const FormattedPrice = (price: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);
};

const Modal = ({ isOpen, onClose, dish }: Props) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(add(dish));
    dispatch(open());
  };

  if (!isOpen) return null;

  return (
    <ModalContainer>
      <div className="overlay" onClick={onClose}></div>
      <ModalContent className="container" onClick={(e) => e.stopPropagation()}>
        <img src={dish.foto} alt={dish.nome} />
        <ModalContain>
          <div>
            <h3>{dish.nome}</h3>
            <p>{dish.descricao}</p>
          </div>
          <div>
            <p>Serve: de {dish.porcao}</p>
            <Button
              type="button"
              variant="addCart"
              onClick={() => {
                handleAddToCart();
              }}
              to="#"
            >
              Adicionar ao carrinho - {FormattedPrice(dish.preco)}
            </Button>
          </div>
        </ModalContain>
        <div className="close-icon" onClick={onClose}>
          <img src={close} alt="Ícone de fechar" />
        </div>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
