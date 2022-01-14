import { useParams } from "react-router-dom";
import BugDetail from "../components/BugDetail";

const Bug = () => {
  const params = useParams();

  return <BugDetail bugID={params.bugID} />;
};

export default Bug;
