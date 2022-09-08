import { TestsBody } from "../../Components/TestsBody/TestsBody";
import { Maintenance } from "../../Components/Maintenance/Maintenance";
import { StyledDiv, StyledMain, Title } from "./styles";
import { ProjectObject } from "../../Components/Project/Object";

export function Main() {
  let maintenance = true;
  return (
    <StyledMain>
      {maintenance ? (
        <Maintenance />
      ) : (
        <StyledDiv direction="column">
          <Title size="2.7vw">Projetos</Title>
          <StyledDiv direction="row">
            <ProjectObject />
          </StyledDiv>
        </StyledDiv>
      )}
    </StyledMain>
  );
}
