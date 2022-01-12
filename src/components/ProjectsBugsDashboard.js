import { useState } from "react";
import { getProjects } from "./ServerConnections";
import { ProjectBar } from "./ProjectBar";

const ProjectsBugsDashboard = () => {
  const [projectsArray, setProjectsArray] = useState([]);

  getProjects().then((data) => {
    setProjectsArray(data);
  });

  return (
    <>
      <div className="project-bar">
        <div>projectTitle</div>
        <div>projectStatus</div>
        <div>projectStartDate</div>
        <div>projectOwner</div>
      </div>
      {projectsArray.map((project) => (
        <ProjectBar
          key={project._id}
          projectTitle={project.projectTitle}
          projectStatus={project.projectStatus}
          projectStartDate={project.StartDate}
          projectOwner={project.projectOwner}
        />
      ))}
    </>
  );
};

export default ProjectsBugsDashboard;
