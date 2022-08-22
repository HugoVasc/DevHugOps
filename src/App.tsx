import { Main } from "./Pages/Main";
import { Testes } from "./Pages/Testes";
import { Projects } from "./Pages/Projects";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { StyledDiv, StyledMain } from "./Pages/Main/styles";
import { Header } from "./Components/Header/Header";
import { UnmountClosed } from "react-collapse";
import { Sidebar } from "./Components/SideBar/Sidebar";
import { useRecoilValue } from "recoil";
import { sideBarState } from "./hooks/atom";

function App() {
  const isSideBarOpened = useRecoilValue(sideBarState);

  return (
    <StyledDiv>
      <Router>
        <Header />
        <StyledMain>
          <Routes>
            <Route index element={<Main />} />
            <Route path="testes" element={<Testes />} />
            <Route path="projects" element={<Projects />} />
          </Routes>
          <UnmountClosed isOpened={isSideBarOpened}>
            <Sidebar />
          </UnmountClosed>
        </StyledMain>
      </Router>
    </StyledDiv>
  );
}

export default App;
