import Dish from "../../models/Dish";

import Card from "../Card";
import { List } from "./styles";

type Props = {
  variant: "home" | "perfil";
  dishes: Dish[];
};

const CardList = ({ dishes, variant }: Props) => (
  <div className="container">
    <List variant={variant}>
      {dishes.map((dish) => (
        <li key={dish.id}>
          <Card
            variant={variant === "home" ? "card" : "product"}
            title={dish.title}
            infos={dish.infos}
            image={dish.image}
            description={dish.description}
            avaliation={dish.avaliation}
          />
        </li>
      ))}
    </List>
  </div>
);

export default CardList;
