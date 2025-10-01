import Estrela from "../../assets/images/estrela.png";

import {
  Border,
  Botao,
  CardContainer,
  Description,
  Infos,
  TitleCard,
  TitleDescription,
} from "./styles";
import Tag from "../Tag";
import { Link } from "react-router-dom";

type Props = {
  variant?: "card" | "product";
  title: string;
  infos?: string[];
  image: string;
  description: string;
  avaliation?: number;
};

const Card = ({
  title,
  infos = [],
  image,
  description,
  avaliation,
  variant = "card",
}: Props) => {
  const getDescricao = (text: string) => {
    if (text.length > 250) {
      return text.slice(0, 247) + "...";
    }
    return text;
  };

  if (variant === "product") {
    return (
      <CardContainer variant="product">
        <img src={image} alt={title} />
        <TitleCard variant="product">{title}</TitleCard>
        <Description variant="product">{getDescricao(description)}</Description>
        <Botao as="button" variant="product">
          Adicionar ao carrinho
        </Botao>
      </CardContainer>
    );
  }

  return (
    <CardContainer variant="card">
      <Border>
        <img src={image} alt={title} />
        <Infos>
          {infos.map((info) => (
            <Tag key={info}>{info}</Tag>
          ))}
        </Infos>

        <TitleCard variant="card">
          <TitleDescription>
            <h4>{title}</h4>
            <span>
              {avaliation}
              <img src={Estrela} alt="Estrela" />
            </span>
          </TitleDescription>
        </TitleCard>
        <Description variant="card">{getDescricao(description)}</Description>
        <Link to="/Perfil">
          <Botao variant="card">Saiba mais</Botao>
        </Link>
      </Border>
    </CardContainer>
  );
};

export default Card;
