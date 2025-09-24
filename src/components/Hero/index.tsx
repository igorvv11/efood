import { HeroHome, TitleHero } from "./styles";
import Vector from "../../assets/images/Vector.png";

const Hero = () => (
  <HeroHome style={{ background: `url(${Vector}) ` }}>
    <TitleHero className="container">
      Viva experiências gastronômicas no conforto da sua casa
    </TitleHero>
  </HeroHome>
);

export default Hero;
