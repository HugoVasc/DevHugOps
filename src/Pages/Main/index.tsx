import { TestsBody } from "../../Components/TestsBody/TestsBody";
import { Maintenance } from "../../Components/Maintenance/Maintenance";
import { Header } from "../../Components/Header/Header";
import { Sidebar } from "../../Components/SideBar/Sidebar";
import { Collapse } from "react-collapse";
import { useState } from "react";
import { StyledDiv, StyledMain } from "./styles";

export function Main() {
  let maintenance = false;
  const [opened, setOpened] = useState(true);
  return (
    <StyledDiv>
      <Header />
      <StyledMain>
        {maintenance ? (
          <TestsBody opened={opened} setOpened={setOpened} />
        ) : (
          <Maintenance />
        )}
        <Collapse isOpened={opened}>
          <Sidebar />
        </Collapse>
      </StyledMain>
    </StyledDiv>
  );
}
