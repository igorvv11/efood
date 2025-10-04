import {
  HeaderHome,
  HeaderPerfil,
  HeroHeader,
  Nav,
  StyledLink,
  TitleHeader,
} from "./styles";
import Vector from "../../assets/images/Vector.png";
import Logo from "../../assets/images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";
import { open } from "../../store/reducers/cart";

export type HeaderProps = {
  variant?: "home" | "perfil";
};

const Header = ({ variant = "home" }: HeaderProps) => {
  const { items } = useSelector((state: RootReducer) => state.cartSlice);
  const dispatch = useDispatch();
  const openCart = () => {
    dispatch(open());
  };

  if (variant === "perfil") {
    return (
      <HeroHeader style={{ background: `url(${Vector}) ` }}>
        <HeaderPerfil className="container">
          <Nav href="/">Restaurantes</Nav>
          <StyledLink to="/">
            <img src={Logo} alt="Company logo" />
          </StyledLink>
          <Nav href="#" onClick={openCart}>
            {items.length} produto(s) no carrinho
          </Nav>
        </HeaderPerfil>
      </HeroHeader>
    );
  }

  return (
    <HeroHeader style={{ background: `url(${Vector}) ` }}>
      <HeaderHome className="container">
        <StyledLink to="/">
          <img src={Logo} alt="Company logo" />
        </StyledLink>
        <TitleHeader>
          Viva experiências gastronômicas no conforto da sua casa
        </TitleHeader>
      </HeaderHome>
    </HeroHeader>
  );
};
export default Header;
