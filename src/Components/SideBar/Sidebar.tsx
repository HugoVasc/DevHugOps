import { BsXDiamondFill } from "react-icons/bs";
import { SideObject } from "../SideObjects/SideObject";
import { StyledDiv, StyledObject } from "./styles";
export function Sidebar() {
  return (
    <StyledDiv>
      <SideObject contactKind="LinkedIn" />
      <SideObject contactKind="WhatsApp" />
      <SideObject title="Projetos" link="projects" />
    </StyledDiv>
  );
}
