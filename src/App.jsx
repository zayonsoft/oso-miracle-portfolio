import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import ProjectsPage from "./pages/projects/ProjectsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/my_project/:id" element={<ProjectsPage />}></Route>
    </Routes>
  );
}

export default App;
