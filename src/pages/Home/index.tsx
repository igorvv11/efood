import Header from "../../components/Header";
import RestaurantList from "../../components/RestaurantList";

import { useEffect, useState } from "react";

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
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    fetch("https://ebac-fake-api.vercel.app/api/efood/restaurantes")
      .then((response) => response.json())
      .then((data) => setRestaurants(data));
  }, []);

  return (
    <>
      <Header variant="home" />
      <RestaurantList restaurants={restaurants} />
    </>
  );
};

export default Home;
