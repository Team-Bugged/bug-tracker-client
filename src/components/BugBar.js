import { useNavigate } from "react-router-dom";

export const BugBar = ({
  projectID,
  bugID,
  bugTitle,
  bugSeverity,
  bugDueDate,
  createdBy,
}) => {
  const navigate = useNavigate();
  const handleBugClick = () => {
    navigate(`/project/${projectID}/${bugID}`);
  };
  return (
    <>
      <div className="bug-bar" onClick={handleBugClick}>
        <div>{bugTitle}</div>
        <div>{bugSeverity}</div>
        <div>{bugDueDate}</div>
        <div>{createdBy}</div>
      </div>
    </>
  );
};
