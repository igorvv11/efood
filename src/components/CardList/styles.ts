import styled from "styled-components";

type Props = {
  variant: "home" | "perfil";
};

export const List = styled.ul<Props>`
  list-style: none;
  display: grid;
  grid-template-columns: ${(props) =>
    props.variant === "home" ? "1fr 1fr" : "1fr 1fr 1fr"};
  column-gap: ${(props) => (props.variant === "home" ? "80px" : "32px")};
  row-gap: ${(props) => (props.variant === "home" ? "40px" : "32px")};
  margin-top: ${(props) => (props.variant === "home" ? "80px" : "56px")};
`;

export const CardLi = styled.li`
  /* Estilos individuais do item da lista, se necessário no futuro */
`;
