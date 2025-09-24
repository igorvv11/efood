import Logo from "../../assets/images/logo.png";
import { HeroHeader, Nav } from "./styles";
import Vector from "../../assets/images/Vector.png";
import { Link } from "react-router-dom";

type Props = {
  carrinho?: string;
  bars?: string;
};

const Header = ({ carrinho, bars }: Props) => {
  return (
    <HeroHeader style={{ background: `url(${Vector}) ` }}>
      <div className="container">
        <Nav href="#">{bars}</Nav>
        <Link to="/">
          <img src={Logo} alt="Company logo" />
        </Link>
        <Nav href="#">{carrinho}</Nav>
      </div>
    </HeroHeader>
  );
};
export default Header;
