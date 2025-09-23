import Card from "../Card";
import { CardLi, CardlistContainer } from "./styles";

const CardList = () => (
  <div className="container">
    <CardlistContainer>
      <CardLi>
        <Card />
      </CardLi>
      <CardLi>
        <Card />
      </CardLi>
      <CardLi>
        <Card />
      </CardLi>
      <CardLi>
        <Card />
      </CardLi>
      <CardLi>
        <Card />
      </CardLi>
      <CardLi>
        <Card />
      </CardLi>
    </CardlistContainer>
  </div>
);

export default CardList;
