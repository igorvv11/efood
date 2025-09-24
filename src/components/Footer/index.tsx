import Logo from "../../assets/images/logo.png";
import Vector from "../../assets/images/Vector.png";
import {
  FooterConainer,
  FooterLogos,
  FootersStyles,
  LogoF,
  P,
  RedesSociais,
} from "./styles";
import Insta from "../../assets/images/insta.png";
import Face from "../../assets/images/face.png";
import X from "../../assets/images/x.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <FootersStyles style={{ background: `url(${Vector}) ` }}>
        <FooterConainer>
          <FooterLogos>
            <Link to="/">
              <LogoF src={Logo} alt="Company logo" />
            </Link>
            <div>
              <RedesSociais>
                <li>
                  <a href="#">
                    <img src={Insta} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={Face} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={X} alt="" />
                  </a>
                </li>
              </RedesSociais>
            </div>
          </FooterLogos>
          <P>
            A efood é uma plataforma para divulgação de estabelecimentos, a
            responsabilidade pela entrega, qualidade <br /> dos produtos é toda
            do estabelecimento contratado.{" "}
          </P>
        </FooterConainer>
      </FootersStyles>
    </>
  );
};
export default Footer;
