import { useState } from "react";
import { addProject } from "./ServerConnections";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import TextField from "@mui/material/TextField";

export const AddProjectForm = () => {
  const navigate = useNavigate();
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");

  const handleAddProjectSubmit = (e) => {
    e.preventDefault();
    addProject(projectTitle, projectDescription).then(navigate("/dashboard"));
  };
  return (
<<<<<<< HEAD
    <form className="addForm">
      <input
        placeholder="Project Title"
        value={projectTitle}
        onChange={(input) => {
          setProjectTitle(input.target.value);
        }}
      />
      <input
        placeholder="Project Description"
        value={projectDescription}
        onChange={(input) => {
          setProjectDescription(input.target.value);
        }}
      />
      <button className="save-btn" onClick={handleAddProjectSubmit}>Save</button>
    </form>
=======
    <>
      <Navbar />
      <form className="projectForm">
        <input
          placeholder="Project Title"
          value={projectTitle}
          onChange={(input) => {
            setProjectTitle(input.target.value);
          }}
        />
        <input
          className="descp"
          placeholder="Project Description"
          value={projectDescription}
          onChange={(input) => {
            setProjectDescription(input.target.value);
          }}
        />
        <button className="save-btn" onClick={handleAddProjectSubmit}>
          Save
        </button>
      </form>
    </>
>>>>>>> upstream/master
  );
};
