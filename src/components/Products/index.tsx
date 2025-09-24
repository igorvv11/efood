import Pizza from "../../assets/images/pizza.png";
import {
  Botao,
  Description,
  ProductContain,
  ProductContainer,
  Title,
} from "./styles";

const Product = () => (
  <div className="container">
    <ProductContainer>
      <img src={Pizza} alt="pizza marguerita" />
      <ProductContain>
        <Title>Pizza Marguerita</Title>
        <Description>
          A clássica Marguerita: molho de tomate suculento, mussarela derretida,
          manjericão fresco e um toque de azeite. Sabor e simplicidade!
        </Description>
        <Botao>Adicionar ao carrinho</Botao>
      </ProductContain>
    </ProductContainer>
  </div>
);

export default Product;
