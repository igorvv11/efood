import styled from "styled-components";
import { cores } from "../../styles";
import lixeira from "../../assets/images/lixeira-de-reciclagem.png";
import { ButtonContainer } from "../Button/styles";

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;

  &.is-open {
    display: flex;
  }
`;

export const SideBar = styled.div`
  z-index: 1;
  max-width: 360px;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  background-color: ${cores.vermelho};
  padding: 8px;

  ul {
    padding-top: 32px;
  }

  ${ButtonContainer} {
    width: 100%;
  }
`;

export const CartContain = styled.li`
  position: relative;
  display: flex;
  background-color: ${cores.laranja};
  max-width: 344px;
  width: 100%;
  height: 100px;
  margin-bottom: 12px;
  padding: 8px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 8px;
  }
  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`;

export const Titulo = styled.h4`
  font-weight: 900;
  font-size: 18px;
  margin-bottom: 16px;
`;

export const Prices = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${cores.laranja};
  margin-top: 40px;
  margin-bottom: 16px;
`;
