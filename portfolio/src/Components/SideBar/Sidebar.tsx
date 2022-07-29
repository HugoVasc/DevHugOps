import { SideProject } from "../SideObjects/SideProject";
import { StyledDiv } from "./styles";

export function Sidebar() {
  return (
    <StyledDiv>
      <SideProject name="projeto-1" />
      <SideProject name="projeto-2" />
      <SideProject name="projeto-3" />
    </StyledDiv>
  );
}
