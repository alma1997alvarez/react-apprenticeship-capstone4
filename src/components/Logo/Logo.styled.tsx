import styled from "styled-components";
import { ILogo } from './Logo.type'

const StyledLogo = styled.span<ILogo>`
  background-color: transparent;
  font-family: 'Vidaloka';
  width: max-content;
  color: #FFCBA4;
  font-weight: 800;
  font-size: ${props => props.fontSize || "2rem"};
  margin: 10px;
`;

export { StyledLogo };
