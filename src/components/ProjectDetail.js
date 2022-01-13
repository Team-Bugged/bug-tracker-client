import { getProjectData } from "../components/ServerConnections";
import { BugBar } from "../components/BugBar";
import { useEffect, useState } from "react";
import { useInfoContext } from "../components/Context";

const ProjectDetail = ({ projectID }) => {
  const [project, setProject] = useState();
  const [loading, setLoading] = useState(true);
  const { name } = useInfoContext();

  useEffect(() => {
    getProjectData(projectID)
      .then((data) => {
        setProject(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setLoading(!loading);
  }, []);

  const handleDeleteProject = () => {
    //todo
  };
  return (
    <>
      {loading ? (
        "Loading "
      ) : (
        <>
          <div>
            <h1>{project?.projectTitle}</h1>
          </div>
          <div>
            <p>{project?.projectDescription}</p>
          </div>
          <div>
            <p>{project?.projectOwner}</p>
          </div>
          <div>
            <p>{project?.projectStatus}</p>
          </div>
          <div>
            <p>{project?.projectStartDate}</p>
          </div>
          {project?.projectOwner === name ? (
            <button onClick={handleDeleteProject}>Delete</button>
          ) : (
            <></>
          )}
          {project?.bugs?.map((bug) => {
            <BugBar
              key={bug._id}
              bugDescription={bug.bugDescription}
              bugSeverity={bug.bugSeverity}
              bugDueDate={bug.bugDueDate}
              assignedTo={bug.assignedTo}
            />;
          })}
        </>
      )}
    </>
  );
};

export default ProjectDetail;
