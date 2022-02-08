import React from "react";
import Logo from "../Logo/Logo.component";
import { StyledFooter } from "./Footer.styled";

const Header: React.FC = () => {
  return (
    <StyledFooter>
      <Logo fontSize="1.4rem" /> | Wizeline Apprenticeship
    </StyledFooter>
  );
};

export default Header;
