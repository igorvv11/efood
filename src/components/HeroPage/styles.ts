// styles.ts
import styled from "styled-components";
import { cores } from "../../styles";

export const HeroPageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  color: ${cores.branca};
  font-size: 32px;
  overflow: hidden;
`;

export const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  background-repeat: no-repeat;
  background-size: cover;
  filter: brightness(50%);
  z-index: 0;
`;

export const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1024px;
  margin: 0 auto;
  height: 100%;
  padding: 16px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const Info = styled.p`
  font-weight: 100;
  margin: 0;
`;

export const Title = styled.h2`
  font-weight: 900;
  font-size: 32px;
  margin: 0;
  font-style: Thin;
`;
