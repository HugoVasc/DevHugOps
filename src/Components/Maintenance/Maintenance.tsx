import { Container } from "./styles";
import { Title } from "../../styles/styles";
import MaintenanceImg from "../../assets/MaintenanceImg";

export function Maintenance() {
  return (
    <Container width={100}>
      <Title size="20px">Site em desenvolvimento!</Title>
      <MaintenanceImg width={15} />
    </Container>
  );
}
