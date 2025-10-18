import {
  HeroBackground,
  HeroPageContainer,
  Info,
  Title,
  Content,
  Wrapper,
} from "./styles";

type Props = {
  image: string;
  category: string;
  title: string;
};

const HeroPage = ({ image, category, title }: Props) => (
  <HeroPageContainer>
    <HeroBackground style={{ backgroundImage: `url(${image})` }} />
    <Wrapper>
      <Content>
        <Info>{category}</Info>
        <Title>{title}</Title>
      </Content>
    </Wrapper>
  </HeroPageContainer>
);

export default HeroPage;
