import { getBugData, getProjectData } from "../components/ServerConnections";
import { BugBar } from "../components/BugBar";
import { useEffect, useState } from "react";
import { useInfoContext } from "../components/Context";
import { useNavigate } from "react-router-dom";
import BugList from "./BugList";
import { deleteProject } from "../components/ServerConnections";

const BugDetail = ({ bugID }) => {
  const [bug, setBug] = useState();
  const [loading, setLoading] = useState(true);
  const { name } = useInfoContext();
  const navigate = useNavigate();

  useEffect(() => {
    getBugData(bugID)
      .then((data) => {
        setBug(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDeleteBug = () => {
    //todo
  };

  const handleAssignBug = () => {
    //todo
  };

  const handleCloseBug = () => {
    //todo
  };
  return (
    <>
      {loading ? (
        "Loading "
      ) : (
        <>
          <div>
            <h1>{bug?.bugTitle}</h1>
          </div>
          <div>
            <p>{bug?.bugDescription}</p>
          </div>
          <div>
            <p>{bug?.createdBy}</p>
          </div>
          <div>
            <p>{bug?.bugStatus}</p>
          </div>
          <div>
            <p>{bug?.bugSeverity}</p>
          </div>
          <div>
            <p>{bug.assignedTo}</p>
          </div>
          <div>
            <button onClick={handleAssignBug}>Assing Bug</button>
            {bug?.createdBy === name ? (
              <button onClick={handleDeleteBug}>Delete</button>
            ) : (
              <></>
            )}
            <button onClick={handleCloseBug}>Close Bug</button>
          </div>
        </>
      )}
    </>
  );
};

export default BugDetail;
