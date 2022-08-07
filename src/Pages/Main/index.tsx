import { TestsBody } from "../../Components/TestsBody/TestsBody";
import { Maintenance } from "../../Components/Maintenance/Maintenance";
import { StyledMain } from "./styles";

export function Main() {
  let maintenance = false;
  return (
    <StyledMain>{maintenance ? <Maintenance /> : <TestsBody />}</StyledMain>
  );
}
