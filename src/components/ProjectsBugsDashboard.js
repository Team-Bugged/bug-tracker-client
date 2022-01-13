import { useState, useEffect } from "react";
import { getProjects, getBugs } from "./ServerConnections";
import { ProjectBar } from "./ProjectBar";
import { BugBar } from "./BugBar";

const ProjectsBugsDashboard = () => {
  const [projectsArray, setProjectsArray] = useState([]);
  const [bugsArray, setBugsArray] = useState([]);

  useEffect(() => {
    getProjects().then((data) => {
      setProjectsArray(data);
    });

    getBugs().then((data) => {
      setBugsArray(data);
    });
  }, []);

  return (
    <>
      <div className="project-bar">
        <div>Project Title</div>
        <div>Project Status</div>
        <div>Project StartDate</div>
        <div>Project Owner</div>
      </div>
      {projectsArray.map((project) => (
        <ProjectBar
          key={project._id}
          projectTitle={project.projectTitle}
          projectStatus={project.projectStatus}
          projectStartDate={project.projectStartDate}
          projectOwner={project.projectOwner}
        />
      ))}
      <br />
      <div className="project-bar">
        <div>Bug Title</div>
        <div>Bug Severity</div>
        <div>Bug DueDate</div>
        <div>Bug Created By</div>
      </div>
      {bugsArray.map((bug) => (
        <BugBar
          key={bug._id}
          bugID={bug._id}
          bugTitle={bug.bugTitle}
          bugSeverity={bug.bugSeverity}
          bugDueDate={bug.bugDueDate}
          createdBy={bug.createdBy}
        />
      ))}
    </>
  );
};

export default ProjectsBugsDashboard;
