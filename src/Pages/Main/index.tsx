import { TestsBody } from "../../Components/TestsBody/TestsBody";
import { Maintenance } from "../../Components/Maintenance/Maintenance";
import { Header } from "../../Components/Header/Header";
import { Sidebar } from "../../Components/SideBar/Sidebar";
import { UnmountClosed } from "react-collapse";
import { useState } from "react";
import { StyledDiv, StyledMain } from "./styles";

export function Main() {
  let maintenance = false;
  const [opened, setOpened] = useState(false);
  return (
    <StyledDiv>
      <Header />
      <StyledMain>
        {maintenance ? (
          <TestsBody opened={opened} setOpened={setOpened} />
        ) : (
          <Maintenance />
        )}
        <UnmountClosed isOpened={opened}>
          <Sidebar />
        </UnmountClosed>
      </StyledMain>
    </StyledDiv>
  );
}
