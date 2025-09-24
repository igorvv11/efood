import styled from "styled-components";
import { cores } from "../../styles";

export const HeroHeader = styled.header`
  width: 100%;
  padding-bottom: 65px;

  .container {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    padding-top: 64px;
    align-items: center;
    img {
      justify-self: center;
    }
    a:last-child {
      justify-self: end;
    }
  }
`;
export const Nav = styled.a`
  color: ${cores.vermelho};
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
`;
