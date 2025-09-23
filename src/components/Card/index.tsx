import Sushi from "../../assets/images/sushi.png";
import Estrela from "../../assets/images/estrela.png";

import { Border, Botao, CardContainer, Description, TitleCard } from "./styles";

const Card = () => (
  <CardContainer>
    <Border>
      <img src={Sushi} alt="Sushi dish" />
      <TitleCard>
        <h4>Hioki Sushi</h4>
        <h4>
          4.9 <img src={Estrela} alt="Estrela" />
        </h4>
      </TitleCard>
      <Description>
        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
        frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
        rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão
        sem sair do lar com nosso delivery!
      </Description>
      <Botao>Saiba mais</Botao>
    </Border>
  </CardContainer>
);

export default Card;
