import Estrela from "../../assets/images/estrela.png";

import {
  Border,
  CardContainer,
  Description,
  Imagens,
  Infos,
  TitleCard,
  TitleDescription,
} from "./styles";
import Tag from "../Tag";
import { Link } from "react-router-dom";
import Button from "../Button";
type Props = {
  variant?: "card" | "product";
  title: string;
  infos?: string[];
  image: string;
  description: string;
  avaliation?: number;
  id?: number;
  onClick?: () => void;
};

const Card = ({
  id,
  title,
  infos = [],
  image,
  description,
  avaliation,
  variant = "card",
  onClick,
}: Props) => {
  const getDescricao = (text: string | undefined) => {
    if (text && text.length > 129) {
      return text.slice(0, 126) + "...";
    }
    return text;
  };

  if (variant === "product") {
    return (
      <CardContainer variant="product">
        <img src={image} alt={title} />
        <TitleCard variant="product">{title}</TitleCard>
        <Description variant="product">{getDescricao(description)}</Description>
        <Button onClick={onClick} to="#" type="button" variant="product">
          Adicionar ao carrinho
        </Button>
      </CardContainer>
    );
  }

  return (
    <CardContainer variant="card">
      <Border>
        <Imagens src={image} alt={title} />
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
        <Link to={`/Perfil/${id}`}>
          <Button to={`/Perfil/${id}`} type="link" variant="card">
            Saiba mais
          </Button>
        </Link>
      </Border>
    </CardContainer>
  );
};

export default Card;
