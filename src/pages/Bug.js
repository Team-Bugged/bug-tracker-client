import { useParams } from "react-router-dom";
import BugDetail from "../components/BugDetail";

const Bug = () => {
  const params = useParams();

  return <BugDetail projectID={params.projectID} bugID={params.bugID} />;
};

export default Bug;
