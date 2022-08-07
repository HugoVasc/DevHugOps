import { useState } from "react";
import { Button, Container } from "./styles";

const setChanges = (
  setCount: Function,
  count: number,
  setState: Function,
  state: boolean
): void => {
  setCount(count + 1);
  setState(!state);
};

interface IBody {
  opened: boolean;
  setOpened: Function;
}

export function TestsBody(props: IBody) {
  const [count, setCount] = useState(0);
  const [state, setState] = useState(true);
  return (
    <Container>
      <span>{count}</span>
      <Button
        primary={state}
        onClick={() => setChanges(setCount, count, setState, state)}
      >
        {" "}
        Clique{" "}
      </Button>
    </Container>
  );
}
