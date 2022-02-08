import React from "react";
import { ContentDiv } from "./ContentContainer.styled";

type ContainerProps = { children: React.ReactNode };
const ContentContainer: React.FC<ContainerProps> = ({ children }) => {
  console.log(children);
  return <ContentDiv>{children}</ContentDiv>;
};

export default ContentContainer;
