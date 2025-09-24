import Dish from "../../models/Dish";

import Card from "../Card";
import { CardLi, Cardlist } from "./styles";

type Props = {
  dish: Dish[];
};

const CardList = ({ dish }: Props) => (
  <Cardlist>
    <CardLi>
      {dish.map((dish) => (
        <Card
          key={dish.id}
          title={dish.title}
          infos={dish.infos}
          image={dish.image}
          description={dish.description}
          avaliation={dish.avaliation}
        />
      ))}
    </CardLi>
  </Cardlist>
);

export default CardList;
