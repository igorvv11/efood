import styled, { createGlobalStyle } from "styled-components";

export const cores = {
  branca: "#FFF8F2",
  vermelho: "#E66767",
  laranja: "#FFEBD9",
};

export const breakpoints = {
  desktop: "1024px",
  tablet: "768px",
  mobile: "540px",
};

export const GlobalCss = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
}

body{
  background-color: ${cores.branca};
  color: ${cores.vermelho};
}

.container {
    max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 80%;
  }
}

`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
`;
