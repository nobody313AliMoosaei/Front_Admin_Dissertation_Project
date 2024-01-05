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
import DissertationExpert from "./pages/dissertationExpert";
import GraduateExpert from "./pages/graduatexpert";
import Deletesupervisor from "./components/pages/supervisor/deleteSupervisor";
import EditSupervisor from "./components/pages/supervisor/editSupervisor";
import AddSupervisor from "./components/pages/supervisor/addSupervisor";
import AddDissertationExpert from "./components/pages/dissertationExpert/addDissertationExpert";
import EditDissertationExpert from "./components/pages/dissertationExpert/editDissertationExpert";
import AddGraduateExpert from "./components/pages/graduateExpert/addGraduateExpert";
import EditGraduateExpert from "./components/pages/graduateExpert/editGraduateExpert";
import Profile from "./pages/profile";
import Reporting from "./pages/reporting";
import Logout from "./components/common/logout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="admin" element={<Layout />}>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="logout" element={<Logout />} />
          {/* student Route */}
          <Route path="student" element={<Student />} />
          <Route path="dissertation" element={<Dissertation />} />
          <Route path="student/add" element={<AddStudent />} />
          {/* <Route path="student/delete" element={<DeleteStudent />} /> */}
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
          {/* DissertationExpert */}
          <Route path="dissertationexpert" element={<DissertationExpert />} />
          <Route
            path="dissertationexpert/edit/:id"
            element={<EditDissertationExpert />}
          />
          <Route
            path="dissertationexpert/add"
            element={<AddDissertationExpert />}
          />
          {/* graduate expert */}
          <Route path="graduateexpert" element={<GraduateExpert />} />
          <Route path="graduateexpert/add" element={<AddGraduateExpert />} />
          <Route
            path="graduateexpert/edit/:id"
            element={<EditGraduateExpert />}
          />
          <Route path="reporting" element={<Reporting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
