import Macarao from "../../assets/images/macarrao_hero.png";
import { HeroBackground, HeroPageContainer, Info, Title } from "./styles";

const HeroPage = () => (
  <HeroPageContainer className="container">
    <HeroBackground
      style={{
        background: `url(${Macarao}) `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        filter: "brightness(50%)",
      }}
    ></HeroBackground>
    <div>
      <Info>Italiana</Info>
      <Title>La Dolce Vita Trattoria</Title>
    </div>
  </HeroPageContainer>
);

export default HeroPage;
