import { Route, Routes, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Welcome from "./pages/Welcome";
import Project from "./pages/Project";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Welcome />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
      <Route exact path="/project/:projectID" element={<Project />} />
    </Routes>
  );
};

export default App;
