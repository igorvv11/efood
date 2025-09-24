import { ReactNode } from "react";
import { TagContainer, Tags } from "./styles";

type Props = {
  children: ReactNode;
};

const Tag = ({ children }: Props) => (
  <Tags>
    <TagContainer>{children}</TagContainer>
  </Tags>
);

export default Tag;
