import React from "react";
import { StyledHeader } from "./Header.styled";
import Logo from "../Logo/Logo.component";
import Searchbar from "./Searchbar/Searchbar.component";
import ShoppingCartIcon from "./ShoppingCartIcon/ShoppingCartIcon.component";
const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Logo fontSize="2rem" />
      <Searchbar />
      <ShoppingCartIcon />
    </StyledHeader>
  );
};

export default Header;
