import { Main } from "./Pages/Main";
import { Tests } from "./Pages/Tests";
import { Contact } from "./Pages/Contact";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { StyledDiv, StyledMain } from "./Pages/Main/styles";
import { Header } from "./Components/Header/Header";
import { UnmountClosed } from "react-collapse";
import { Sidebar } from "./Components/SideBar/Sidebar";
import { useState } from "react";

function App() {
  const [opened, setOpened] = useState(true);

  return (
    <StyledDiv>
      <Router>
        <Header opened={opened} setOpened={setOpened} />
        <StyledMain>
          <Routes>
            <Route path="/" element={<Main />}>
              <Route index element={<Main />} />
              <Route path="tests" element={<Tests />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
          <UnmountClosed isOpened={opened}>
            <Sidebar />
          </UnmountClosed>
        </StyledMain>
      </Router>
    </StyledDiv>
  );
}

export default App;
