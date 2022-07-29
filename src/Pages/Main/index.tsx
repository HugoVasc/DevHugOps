import { TestsBody } from "../../Components/TestsBody/TestsBody";
import { Maintenance } from "../../Components/Maintenance/Maintenance";
import { Header } from "../../Components/Header/Header";
import { Sidebar } from "../../Components/SideBar/Sidebar";
import { Collapse } from "react-collapse";
import { useState } from "react";
import { StyledDiv, StyledMain } from "./styles";

export function Main() {
  let maintenance = true;
  const [opened, setOpened] = useState(true);
  return (
    <StyledDiv>
      <Header />
      <StyledMain>
        {maintenance ? (
          <Maintenance />
        ) : (
          <TestsBody opened={opened} setOpened={setOpened} />
        )}
        <Collapse isOpened={opened}>
          <Sidebar />
        </Collapse>
      </StyledMain>
    </StyledDiv>
  );
}
