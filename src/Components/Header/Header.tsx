import { StyledHeader } from "./styles";
import { Title } from "../../styles/styles";
import { FiMenu } from "react-icons/fi";
import { Button } from "./styles";

interface IProps {
  opened: boolean;
  setOpened: Function;
}

export function Header(props: IProps) {
  function handleChange(): void {
    const isOpened = props.opened;
    props.setOpened(!isOpened);
  }

  return (
    <StyledHeader>
      <Title size="36px">Hugo Tech Services</Title>
      <Button onClick={handleChange}>
        <FiMenu />
      </Button>
    </StyledHeader>
  );
}
