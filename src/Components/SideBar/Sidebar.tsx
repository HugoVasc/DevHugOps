import { BsXDiamondFill } from "react-icons/bs";
import { SideObject } from "../SideObjects/SideObject";
import { StyledDiv, StyledObject } from "./styles";
import { useRecoilValue } from "recoil";
import { sideBarState } from "../../hooks/atom";
import { useState } from "react";
export function Sidebar() {
  const isSideBarOpened = useRecoilValue(sideBarState);
  return (
    <StyledDiv Opened={useRecoilValue(sideBarState)}>
      <SideObject contactKind="LinkedIn" />
      <SideObject contactKind="WhatsApp" />
      <SideObject title="Projetos" link="projects" />
    </StyledDiv>
  );
}
