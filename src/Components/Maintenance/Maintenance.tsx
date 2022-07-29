import { useState } from "react";
import { Button, Container } from "./styles";

export function Maintenance() {
  const [count, setCount] = useState(0);
  const [state, setState] = useState(true);
  return (
    <Container>
      <span>Site em desenvolvimento!</span>
    </Container>
  );
}
