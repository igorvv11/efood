import styled from "styled-components";
import { cores } from "../../styles";

export const CardContainer = styled.div`
  width: 472px;
  height: 181px;
  margin-bottom: 80px;
  position: relative;
`;

export const Border = styled.div`
  border: 1px solid ${cores.vermelho};
`;

export const Description = styled.p`
  font-size: 14px;
  margin: 16px 8px;
`;

export const TitleCard = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px;
`;

export const Botao = styled.a`
  display: inline-block;
  padding: 4px 6px;
  background-color: ${cores.vermelho};
  color: ${cores.branca};
  border: none;
  margin-bottom: 8px;
  margin-left: 8px;
  text-decoration: none;
  cursor: pointer;
`;

export const Infos = styled.div`
  display: flex;
  position: absolute;
  top: 16px;
  right: 16px;
`;
