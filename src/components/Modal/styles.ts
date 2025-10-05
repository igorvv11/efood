import styled from "styled-components";
import { breakpoints, cores } from "../../styles";
import { ButtonContainer } from "../Button/styles";

const flexColumn = `
  flex-direction: column;
  align-items: center;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`;

export const ModalContent = styled.div`
  background-color: ${cores.vermelho};
  color: ${cores.branca};
  position: relative;
  z-index: 1;
  padding: 32px;
  display: flex;

  @media (max-width: ${breakpoints.tablet}) {
    ${flexColumn}
  }

  > img {
    object-fit: cover;
    width: 280px;
    height: 280px;
    margin-right: 24px;

    @media (max-width: ${breakpoints.tablet}) {
      margin-right: 0;
      margin-bottom: 24px;
      width: 280px;
      height: 140px;
    }
  }
  @media (max-width: ${breakpoints.tablet}) {
    ${ButtonContainer} {
      max-width: 377px;
      width: 100%;
    }
  }
  h3 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;

    @media (max-width: ${breakpoints.tablet}) {
      ${flexColumn}
      text-align: justify;
    }
  }

  .close-icon {
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
  }
`;

export const ModalContain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  button {
    max-width: 218px;
    width: 100%;
    font-size: 14px;
  }
`;
