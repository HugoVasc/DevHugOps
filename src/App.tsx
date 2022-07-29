import { Main } from "./Pages/Main";
import { Tests } from "./Pages/Tests";
import { Contact } from "./Pages/Contact";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { render } from "react-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Main />} />
          <Route path="tests" element={<Tests />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
