import styled from "styled-components";
import { cores } from "../../styles";

type Props = {
  variant?: "card" | "product" | "addCart";
};

export const Imagens = styled.img`
  width: 100%;
  height: 216px;
  object-fit: cover;
`;

export const CardContainer = styled.div<Props>`
  background-color: ${(props) =>
    props.variant === "product" ? cores.vermelho : cores.branca};
  color: ${(props) => (props.variant === "product" ? cores.branca : "inherit")};
  padding: ${(props) => (props.variant === "product" ? "8px" : "0")};
  position: relative;

  > img {
    width: 100%;
    height: ${(props) => (props.variant === "product" ? "167px" : "217px")};
    object-fit: cover;
  }
`;

export const Border = styled.div`
  border: 1px solid ${cores.vermelho};
  height: 100%;
`;

export const Description = styled.p<Props>`
  font-size: 14px;
  line-height: 22px;
  margin: ${(props) => (props.variant === "product" ? "8px 0" : "16px 8px")};
`;

export const TitleCard = styled.div<Props>`
  margin: ${(props) => (props.variant === "product" ? "8px 0 0 0" : "8px")};
  font-weight: bold;
  font-size: ${(props) => (props.variant === "product" ? "16px" : "18px")};
`;

export const Infos = styled.div`
  display: flex;
  position: absolute;
  top: 16px;
  right: 16px;
  gap: 8px;
`;

export const TitleDescription = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;
