// HeroPage.tsx
import Macarao from "../../assets/images/macarrao_hero.png";
import {
  HeroBackground,
  HeroPageContainer,
  Info,
  Title,
  Content,
  Wrapper,
} from "./styles";

const HeroPage = () => (
  <HeroPageContainer>
    <HeroBackground style={{ backgroundImage: `url(${Macarao})` }} />
    <Wrapper>
      <Content>
        <Info>Italiana</Info>
        <Title>La Dolce Vita Trattoria</Title>
      </Content>
    </Wrapper>
  </HeroPageContainer>
);

export default HeroPage;
