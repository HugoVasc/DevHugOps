import { StyledHeader } from "./styles";
import { Title } from "../../styles/styles";
import { FiMenu } from "react-icons/fi";
import { Button } from "./styles";
import { useRecoilState } from "recoil";
import { sideBarState } from "../../hooks/atom";
import { Link } from "react-router-dom";

export function Header() {
  const [isSideBarOpened, setSidebarState] = useRecoilState(sideBarState);
  function handleChange(): void {
    setSidebarState(!isSideBarOpened);
    // const isOpened = props.opened;
    // props.setOpened(!isOpened);
  }

  return (
    <StyledHeader>
      <Link to="/">
        <Title size="36px">Hugo Developer</Title>
      </Link>
      <Button onClick={handleChange}>
        <FiMenu />
      </Button>
    </StyledHeader>
  );
}
