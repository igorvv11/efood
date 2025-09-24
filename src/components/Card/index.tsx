import Estrela from "../../assets/images/estrela.png";

import {
  Border,
  Botao,
  CardContainer,
  Description,
  Infos,
  TitleCard,
} from "./styles";
import Tag from "../Tag";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  infos?: string[];
  image: string;
  description: string;
  avaliation: number;
};

const Card = ({ title, infos = [], image, description, avaliation }: Props) => (
  <CardContainer>
    <Border>
      <img src={image} alt={title} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>

      <TitleCard>
        <h4>{title}</h4>
        <h4>
          {avaliation}
          <img src={Estrela} alt="Estrela" />
        </h4>
      </TitleCard>
      <Description>{description}</Description>
      <Link to="/Perfil">
        {" "}
        <Botao>Saiba mais</Botao>{" "}
      </Link>
    </Border>
  </CardContainer>
);

export default Card;
