import Logo from "../../assets/images/logo.png";
import { HeroHeader } from "./styles";
import Vector from "../../assets/images/Vector.png";

const Header = () => {
  return (
    <>
      <HeroHeader style={{ background: `url(${Vector}) ` }}>
        <div className="container">
          <img src={Logo} alt="Company logo" />
        </div>
      </HeroHeader>
    </>
  );
};
export default Header;
