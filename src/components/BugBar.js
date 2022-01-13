import { useNavigate } from "react-router-dom";

export const BugBar = ({
  key,
  bugDescription,
  bugSeverity,
  bugDueDate,
  assignedTo,
}) => {
  const navigate = useNavigate();
  const handleProjectClick = () => {
    navigate(`/project/${key}`);
  };
  return (
    <>
      <div className="project-bar" onClick={handleProjectClick}>
        <div>{bugDescription}</div>
        <div>{bugSeverity}</div>
        <div>{bugDueDate}</div>
        <div>{assignedTo}</div>
      </div>
    </>
  );
};
