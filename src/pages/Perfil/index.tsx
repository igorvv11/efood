import Header from "../../components/Header";
import HeroPage from "../../components/HeroPage";
import CardList from "../../components/CardList";
import Dish from "../../models/Dish";
import Pizza from "../../assets/images/pizza.png";

const pratos: Dish[] = [
  {
    id: 7,
    title: "Pizza Marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    image: Pizza,
    infos: [],
    avaliation: 5,
  },
  {
    id: 7,
    title: "Pizza Marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    image: Pizza,
    infos: [],
    avaliation: 5,
  },
  {
    id: 7,
    title: "Pizza Marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    image: Pizza,
    infos: [],
    avaliation: 5,
  },
  {
    id: 7,
    title: "Pizza Marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    image: Pizza,
    infos: [],
    avaliation: 5,
  },
  {
    id: 7,
    title: "Pizza Marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    image: Pizza,
    infos: [],
    avaliation: 5,
  },
  {
    id: 7,
    title: "Pizza Marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    image: Pizza,
    infos: [],
    avaliation: 5,
  },
];

const Perfil = () => (
  <>
    <Header variant="perfil" />
    <HeroPage />
    <CardList variant="perfil" dishes={pratos} />
  </>
);

export default Perfil;
