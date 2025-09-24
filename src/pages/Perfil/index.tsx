import Header from "../../components/Header";
import HeroPage from "../../components/HeroPage";
import ProductList from "../../components/ProductList";

const Perfil = () => (
  <>
    <Header bars="Restaurante" carrinho="0 produto(s) no carrinho" />
    <HeroPage />
    <ProductList />
  </>
);

export default Perfil;
