import { Restaurant } from "../../pages/Home";
import Card from "../Card";
import { List } from "./styles";

type Props = {
  restaurants: Restaurant[];
};

const RestaurantList = ({ restaurants }: Props) => (
  <div className="container">
    <List>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          <Card
            id={restaurant.id}
            title={restaurant.titulo}
            infos={restaurant.tipo ? [restaurant.tipo] : []}
            image={restaurant.capa}
            description={restaurant.descricao}
            avaliation={restaurant.avaliacao}
          />
        </li>
      ))}
    </List>
  </div>
);

export default RestaurantList;
