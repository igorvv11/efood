import styled from "styled-components";
import { cores } from "../../styles";
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

  > img {
    object-fit: cover;
    width: 280px;
    height: 280px;
    margin-right: 24px;
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
