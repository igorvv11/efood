import styled from "styled-components";
import { cores } from "../../styles";

type Props = {
  variant?: "card" | "product" | "addCart" | "perfil";
};

export const ButtonContainer = styled.button<Props>`
  background-color: ${(props) =>
    props.variant === "addCart"
      ? cores.laranja
      : props.variant === "product"
        ? cores.branca
        : cores.vermelho};
  color: ${(props) =>
    props.variant === "product" || props.variant === "addCart"
      ? cores.vermelho
      : cores.branca};
  padding: ${(props) => (props.variant === "addCart" ? "4px 7px" : "4px 6px")};
  border: none;
  text-decoration: none;
  cursor: pointer;
  display: ${(props) =>
    props.variant === "product" || props.variant === "addCart"
      ? "block"
      : "inline-block"};
  width: ${(props) => (props.variant === "product" ? "100%" : "auto")};
  text-align: ${(props) =>
    props.variant === "product" || props.variant === "addCart"
      ? "center"
      : "left"};
  font-size: 14px;
  font-weight: bold;
  margin-top: ${(props) => (props.variant === "product" ? "8px" : "0")};
  margin-left: ${(props) =>
    props.variant === "product" || props.variant === "addCart" ? "0" : "8px"};
  margin-bottom: ${(props) => (props.variant === "product" ? "0" : "8px")};
`;
