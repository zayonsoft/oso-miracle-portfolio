import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import ProjectsPage from "./pages/projects/ProjectsPage";
import SeeWorksSection from "./pages/works/SeeWorksSection";
import ContactSection from "./pages/contact/ContactSection";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/my_project/:id" element={<ProjectsPage />}></Route>
      <Route path="see_my_works" element={<SeeWorksSection />}></Route>
      <Route path="contact" element={<ContactSection />}></Route>
    </Routes>
  );
}

export default App;
