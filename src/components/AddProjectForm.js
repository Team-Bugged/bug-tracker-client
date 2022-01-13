import { useState } from "react";
import { addProject } from "./ServerConnections";
import { useNavigate } from "react-router-dom";

export const AddProjectForm = () => {
  const navigate = useNavigate();
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");

  const handleAddProjectSubmit = (e) => {
    e.preventDefault();
    addProject(projectTitle, projectDescription).then(navigate("/dashboard"));
  };
  return (
    <form>
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
      <button onClick={handleAddProjectSubmit}>Submit</button>
    </form>
  );
};
