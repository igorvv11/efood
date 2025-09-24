import styled from "styled-components";
import { cores } from "../../styles";

export const HeroPageContainer = styled.div`
  display: flex;
  font-weight: 100;
  color: ${cores.branca};
  font-size: 32px;
  padding-bottom: 36px;
`;

export const HeroBackground = styled.div`
  width: 100%;
  height: 280px;
  top: 185px;
  position: absolute;
  left: 0;
`;

export const Info = styled.p`
  position: relative;
  top: 24px;
`;
export const Title = styled.h2`
  position: relative;
  font-weight: 900;
  top: 156px;
  right: 0px;
`;
