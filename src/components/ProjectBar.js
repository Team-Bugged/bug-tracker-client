import { useNavigate } from "react-router-dom";

export const ProjectBar = ({
  key,
  projectTitle,
  projectStatus,
  projectStartDate,
  projectOwner,
}) => {
  const navigate = useNavigate();
  const handleProjectClick = () => {
    navigate(`/project/${key}`);
  };
  return (
    <>
      <div className="project-bar" onClick={handleProjectClick}>
        <div>{projectTitle}</div>
        <div>{projectStatus}</div>
        <div>{projectStartDate}</div>
        <div>{projectOwner}</div> 
        
      </div>
    </>
  );
};
