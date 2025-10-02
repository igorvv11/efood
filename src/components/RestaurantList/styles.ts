import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 40px;
  margin-top: 80px;

  li {
    list-style: none;
  }
`;
