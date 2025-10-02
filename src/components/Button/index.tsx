import { ReactNode } from "react";
import { ButtonContainer } from "./styles";
import { Link } from "react-router-dom";

type Props = {
  type: "button" | "link";
  variant?: "card" | "product" | "addCart" | "perfil";
  children: ReactNode;
  to?: string;
  onClick?: () => void;
};

const Button = ({
  type = "button",
  variant = "card",
  children,
  to,
  onClick,
}: Props) => {
  if (type === "link") {
    return (
      <ButtonContainer as={Link} to={to || "#"} variant={variant}>
        {children}
      </ButtonContainer>
    );
  }

  return (
    <ButtonContainer type="button" variant={variant} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
