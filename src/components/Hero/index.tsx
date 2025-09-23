import { HeroHome, TitleHero } from "./styles";
import Vector from "../../assets/images/Vector.png";

const Hero = () => (
  <HeroHome style={{ background: `url(${Vector}) ` }}>
    <TitleHero>
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </TitleHero>
  </HeroHome>
);

export default Hero;
