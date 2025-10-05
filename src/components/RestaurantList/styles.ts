import styled from "styled-components";
import { breakpoints } from "../../styles";

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 40px;
  margin-top: 80px;

  li {
    list-style: none;
  }

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;
