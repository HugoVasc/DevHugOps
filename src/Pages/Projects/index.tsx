import { StyledDiv, StyledMain, Title } from "./styles";
import { ProjectObject } from "../../Components/Project/Object";

export function Projects() {
  return (
    <StyledMain>
      <StyledDiv direction="column">
        <Title size="2.7vw">Projetos</Title>
        <StyledDiv direction="row">
          <ProjectObject />
          <ProjectObject />
        </StyledDiv>
      </StyledDiv>
    </StyledMain>
  );
}
