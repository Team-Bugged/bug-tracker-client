import { useState } from "react";
import { getProjects, getBugs } from "./ServerConnections";
import { ProjectBar } from "./ProjectBar";
import { BugBar } from "./BugBar";

const ProjectsBugsDashboard = () => {
  const [projectsArray, setProjectsArray] = useState([]);
  const [bugsArray, setBugsArray] = useState([]);

  getProjects().then((data) => {
    setProjectsArray(data);
  });

  getBugs().then((data) => {
    setBugsArray(data);
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
      {bugsArray.map((bug) => {
        <BugBar
          key={bug._id}
          bugDescription={bug.bugDescription}
          bugSeverity={bug.bugSeverity}
          bugDueDate={bug.bugDueDate}
          assignedTo={bug.assignedTo}
        />;
      })}
    </>
  );
};

export default ProjectsBugsDashboard;
