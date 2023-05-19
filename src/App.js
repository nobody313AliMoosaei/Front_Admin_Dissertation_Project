// react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

//CSS
import "./App.css";

//compoonents
import Layout from "./components/common/layout";
import Auth from "./pages/auth";
import Student from "./pages/student";
import Supervisor from "./pages/supervisor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="admin" element={<Layout />}>
          <Route path="student" element={<Student />} />
          <Route path="supervisor" element={<Supervisor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
