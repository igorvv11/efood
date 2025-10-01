import Dish from "../../models/Dish";
import Header from "../../components/Header";
import CardList from "../../components/CardList";

import Sushi from "../../assets/images/sushi.png";
import Macarrao from "../../assets/images/macarrao.png";

const Home = () => (
  <>
    <Header variant="home" />
    <CardList variant="home" dishes={restaurantes} />
  </>
);

export const Japonesa: Dish[] = [
  {
    id: 1,
    title: "Hioki Sushi",
    infos: ["Destaque da semana", "Japonesa"],
    image: Sushi,
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
    avaliation: 4.9,
  },
  {
    id: 1,
    title: "Hioki Sushi",
    infos: ["Destaque da semana", "Japonesa"],
    image: Sushi,
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
    avaliation: 4.9,
  },
];

export const Italiana: Dish[] = [
  {
    id: 4,
    title: "La Dolce Vita Trattoria",
    infos: ["italiana"],
    image: Macarrao,
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    avaliation: 4.9,
  },
  {
    id: 4,
    title: "La Dolce Vita Trattoria",
    infos: ["italiana"],
    image: Macarrao,
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    avaliation: 4.9,
  },
];

const restaurantes = [...Japonesa, ...Italiana];

export default Home;
