import { useState } from "react";
import { Button, Container } from "./styles";
import { Title } from "../../styles/styles";
import MaintenanceImg from "../../assets/MaintenanceImg";

export function Maintenance() {
  const [count, setCount] = useState(0);
  const [state, setState] = useState(true);
  return (
    <Container width={100}>
      <Title size="20px">Site em desenvolvimento!</Title>
      <MaintenanceImg width={15} />
    </Container>
  );
}
