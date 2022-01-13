import { useParams } from "react-router-dom";
import ProjectDetail from "../components/ProjectDetail";

const Project = () => {
  const params = useParams();

  return <ProjectDetail projectID={params.projectID} />;
};

export default Project;
