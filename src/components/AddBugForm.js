import { useState } from "react";
import { addBug } from "./ServerConnections";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar/Navbar";

export const AddBugForm = ({ projectID }) => {
  const navigate = useNavigate();
  const [bugTitle, setBugTitle] = useState("");
  const [bugDescription, setBugDescription] = useState("");
  const [bugSeverity, setBugSeverity] = useState("low");
  const [bugDueDate, setBugDueDate] = useState("");

  const handleAddBugSubmit = (e) => {
    e.preventDefault();
    addBug(projectID, bugTitle, bugDescription, bugSeverity, bugDueDate).then(
      navigate(`/project/${projectID}`)
    );
  };
  return (
    <>
      <Navbar />
      <form className="addForm">
        <input
          placeholder="Bug Title"
          value={bugTitle}
          onChange={(input) => {
            setBugTitle(input.target.value);
          }}
        />
        <input
          placeholder="Bug Description"
          value={bugDescription}
          onChange={(input) => {
            setBugDescription(input.target.value);
          }}
        />
        <select
          value={bugSeverity}
          onChange={(input) => {
            setBugSeverity(input.target.value);
          }}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <input
          type="date"
          onChange={(event) => {
            setBugDueDate(event.target.value);
          }}
        />
        <button className="save-btn" onClick={handleAddBugSubmit}>Save</button>
      </form>
    </>
  );
};
