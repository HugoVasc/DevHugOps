import { StyledHeader } from "./styles";
import { Title } from "../../styles/styles";
import { FiMenu } from "react-icons/fi";
import { Button } from "./styles";
import { useRecoilState } from "recoil";
import { sideBarState } from "../../hooks/atom";

export function Header() {
  const [isSideBarOpened, setSidebarState] = useRecoilState(sideBarState);
  function handleChange(): void {
    setSidebarState(!isSideBarOpened);
    // const isOpened = props.opened;
    // props.setOpened(!isOpened);
  }

  return (
    <StyledHeader>
      <Title size="36px">Hugo Developer</Title>
      <Button onClick={handleChange}>
        <FiMenu />
      </Button>
    </StyledHeader>
  );
}
