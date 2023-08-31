// react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

//CSS
import "./App.css";

//compoonents
import Layout from "./components/common/layout";
import AddNews from "./components/pages/news/addNews";
import EditNews from "./components/pages/news/editNews";
import AddStudent from "./components/pages/student/addstudent";
import DeleteStudent from "./components/pages/student/deleteStudent";
import EditStudent from "./components/pages/student/editStudent";
import Auth from "./pages/auth";
import Dashboard from "./pages/dashboard";
import News from "./pages/news";
import Student from "./pages/student";
import Dissertation from "./pages/dissertation";
import Supervisor from "./pages/supervisor";
import Deletesupervisor from "./components/pages/supervisor/deleteSupervisor"
import EditSupervisor from "./components/pages/supervisor/editSupervisor";
import AddSupervisor from "./components/pages/supervisor/addSupervisor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="admin" element={<Layout />}>
          <Route path="/admin" element={<Dashboard />} />
          {/* student Route */}
          <Route path="student" element={<Student />} />
          <Route path="dissertation" element={<Dissertation />} />
          <Route path="student/add" element={<AddStudent />} />
          <Route path="student/delete" element={<DeleteStudent />} />
          <Route path="student/edit/:id" element={<EditStudent />} />
          {/* news Route  */}
          <Route path="news" element={<News />} />
          <Route path="news/add" element={<AddNews />} />
          <Route path="news/edit/:id" element={<EditNews />} />
          {/* supervisor Route  */}
          <Route path="supervisor" element={<Supervisor />} />
          <Route path="supervisor/add" element={<AddSupervisor />} />
          <Route path="supervisor/delete" element={<Deletesupervisor />} />
          <Route path="supervisor/edit/:id" element={<EditSupervisor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
