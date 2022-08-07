import { SideProject } from "../SideObjects/SideProject";
import { StyledDiv } from "./styles";
export function Sidebar() {
  return (
    <StyledDiv>
      <SideProject contactKind="LinkedIn" />
      <SideProject contactKind="WhatsApp" />
    </StyledDiv>
  );
}
