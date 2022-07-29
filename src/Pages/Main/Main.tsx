import { Body } from "../../Components/Body/Body";
import { Header } from "../../Components/Header/Header";
import { Sidebar } from "../../Components/SideBar/Sidebar";
import { Collapse } from "react-collapse";
import { useState } from "react";
import { StyledDiv, StyledMain } from "./styles";

export function Main() {
  const [opened, setOpened] = useState(true);
  return (
    <StyledDiv>
      <Header />
      <StyledMain>
        <Body opened={opened} setOpened={setOpened} />
        <Collapse isOpened={opened}>
          <Sidebar />
        </Collapse>
      </StyledMain>
    </StyledDiv>
  );
}
