import { useState } from "react";
import { Button, Container } from "./styles";

const setChanges = (
  setCount: Function,
  count: number,
  setState: Function,
  state: boolean,
  setOpened: Function,
  opened: boolean
): void => {
  setCount(count + 1);
  setState(!state);
  setOpened(!opened);
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
        onClick={() =>
          setChanges(
            setCount,
            count,
            setState,
            state,
            props.setOpened,
            props.opened
          )
        }
      >
        {" "}
        Clique{" "}
      </Button>
    </Container>
  );
}
