import Header from "../../components/Header";
import RestaurantList from "../../components/RestaurantList";

import { useGetRestaurantsQuery } from "../../services/api";

export type Restaurant = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: {
    id: number;
    foto: string;
    preco: number;
    nome: string;
    descricao: string;
    porcao: string;
  }[];
};

const Home = () => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery();

  if (isLoading) return <h4>Carregando...</h4>;
  return (
    <>
      <Header variant="home" />
      {restaurants && <RestaurantList restaurants={restaurants} />}
    </>
  );
};

export default Home;
