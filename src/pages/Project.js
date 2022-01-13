import { useParams } from "react-router-dom";
import { getProjectData } from "../components/ServerConnections";
import { BugBar } from "../components/BugBar";

const Project = () => {
  const params = useParams();
  const project = {};
  getProjectData(params.projectID).then((data) => {
    project = data;
  });

  return (
    <>
      <div>
        <h1>{project.projectTitle}</h1>
      </div>
      <div>
        <p>{project.projectDescription}</p>
      </div>
      {project.bugs.map((bug) => {
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

export default Project;
