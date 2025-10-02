import { Dish } from "../../pages/Perfil";
import Card from "../Card";
import { DishesListContainer } from "./styles";

type Props = {
  dishes: Dish[];
  onDishClick: (dish: Dish) => void;
};

const DishesList = ({ dishes, onDishClick }: Props) => {
  return (
    <div className="container">
      <DishesListContainer>
        {dishes.map((dish) => (
          <Card
            key={dish.id}
            variant="product"
            image={dish.foto}
            title={dish.nome}
            description={dish.descricao}
            onClick={() => onDishClick(dish)}
          />
        ))}
      </DishesListContainer>
    </div>
  );
};

export default DishesList;
