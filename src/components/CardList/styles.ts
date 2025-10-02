import styled from "styled-components";
import { cores } from "../../styles";

export const Container = styled.section`
  padding: 80px 0 120px 0;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 40px;
  margin-top: 80px;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: ${cores.branca};
`;
