import Header from "../../components/Header";
import HeroPage from "../../components/HeroPage";
import { useState } from "react";
import { useParams } from "react-router-dom";
import DishesList from "../../components/DishesList";
import Modal from "../../components/Modal";

import { useGetDishQuery } from "../../services/api";

export type Dish = {
  id: number;
  foto: string;
  preco: number;
  nome: string;
  descricao: string;
  porcao: string;
};

export type GalleryItem = Dish;

const Perfil = () => {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const { data: restaurant, isLoading } = useGetDishQuery(id);

  if (isLoading || !restaurant) {
    return <h3>Carregando...</h3>;
  }

  const openModal = (dish: Dish) => {
    setSelectedDish(dish);
    setIsModalOpen(true);
  };

  return (
    <>
      <Header variant="perfil" />
      <HeroPage
        image={restaurant.capa}
        category={restaurant.tipo}
        title={restaurant.titulo}
      />
      {selectedDish && ( // Renderiza o modal apenas se um prato for selecionado
        <Modal
          dish={selectedDish}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)} // Função para fechar o modal
        />
      )}
      <DishesList dishes={restaurant.cardapio} onDishClick={openModal} />
    </>
  );
};

export default Perfil;
