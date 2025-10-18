import styled, { css } from "styled-components";
import { breakpoints, cores } from "../../styles";
import { Link } from "react-router-dom";

type Props = {
  variant?: "home" | "perfil";
};

export const HeroHeader = styled.header<Props>`
  text-decoration: none;
  width: 100%;
`;
export const HeaderHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 64px;

  img {
    margin-bottom: 138px;
  }
  h2 {
    padding-bottom: 40px;
  }
`;

export const HeaderPerfil = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  padding: 64px 0;
  align-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    gap: 16px;
  }

  img {
    justify-self: center;
  }

  a:last-child {
    justify-self: end;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Nav = styled.a`
  color: ${cores.vermelho};
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
`;

export const TitleHeader = styled.h2`
  max-width: 540px;
  color: ${cores.vermelho};
  font-size: 36px;
  font-weight: 900;
  text-align: center;
  text-decoration: none;
`;
