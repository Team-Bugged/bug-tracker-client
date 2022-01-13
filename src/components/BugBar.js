import { useNavigate } from "react-router-dom";

export const BugBar = ({
  key,
  bugTitle,
  bugSeverity,
  bugDueDate,
  createdBy,
}) => {
  const navigate = useNavigate();
  const handleProjectClick = () => {
    navigate(`/project/${key}`);
  };
  return (
    <>
      <div className="project-bar" onClick={handleProjectClick}>
        <div>{bugTitle}</div>
        <div>{bugSeverity}</div>
        <div>{bugDueDate}</div>
        <div>{createdBy}</div>
      </div>
    </>
  );
};
