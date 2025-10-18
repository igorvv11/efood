import styled from "styled-components";
import { breakpoints, cores } from "../../styles";
import { Link } from "react-router-dom";

import cartIcone from "../../assets/images/carrinho.svg";

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
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    grid-template-columns: 1fr;
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
  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

export const TitleHeader = styled.h2`
  max-width: 540px;
  color: ${cores.vermelho};
  font-size: 36px;
  font-weight: 900;
  text-align: center;
  text-decoration: none;
`;

export const CartButtonMobile = styled.button`
  display: none;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
    position: fixed;
    border: 1px solid ${cores.laranja};
    bottom: 24px;
    right: 24px;
    width: 56px;
    height: 56px;
    background-color: ${cores.vermelho};
    background-image: url(${cartIcone});
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 50%;
    cursor: pointer;
    z-index: 1;

    span {
      position: absolute;
      top: -4px;
      right: -4px;
      background-color: ${cores.laranja};
      color: ${cores.vermelho};
      font-size: 12px;
      font-weight: bold;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid ${cores.laranja};
    }
  }
`;
