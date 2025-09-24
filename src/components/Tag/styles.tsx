import styled from "styled-components";
import { cores } from "../../styles";

export const TagContainer = styled.div`
  display: flex;
  top: 12px;
  left: 12px;
  font-size: 12px;
  font-weight: bold;
  color: ${cores.branca};
  background-color: ${cores.vermelho};
  padding: 6px 4px;
  margin-right: 8px;
`;

export const Tags = styled.div`
  display: flex;
`;
