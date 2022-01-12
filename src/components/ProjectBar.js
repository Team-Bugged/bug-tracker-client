export const ProjectBar = ({
  projectTitle,
  projectStatus,
  projectStartDate,
  projectOwner,
}) => {
  return (
    <>
      <div className="project-bar">
        <div>{projectTitle}</div>
        <div>{projectStatus}</div>
        <div>{projectStartDate}</div>
        <div>{projectOwner}</div>
      </div>
    </>
  );
};
