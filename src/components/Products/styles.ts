import styled from "styled-components";
import { cores } from "../../styles";

export const ProductContainer = styled.div`
  background-color: ${cores.vermelho};
  color: ${cores.branca};
  width: 320px;
  height: 338px;
  display: flex;
  flex-direction: column;
  img {
    height: 156px;
    margin: 8px 8px;
  }
`;
export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-top: 8px;
  text-align: start;
`;

export const ProductContain = styled.div`
  width: 304px;
  margin-left: 8px;
  padding-bottom: 12px;
`;

export const Title = styled.h4`
  font-size: 16px;
  font-weight: 900;
`;

export const Botao = styled.button`
  color: ${cores.vermelho};
  background-color: ${cores.branca};
  border: none;
  width: 100%;
  padding: 4px;
  font-size: 16px;
  font-weight: bold;
  margin-top: 12px;
`;
