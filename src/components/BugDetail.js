import { useEffect, useState } from "react";
import { useInfoContext } from "../components/Context";
import { useNavigate } from "react-router-dom";
import {
  deleteBug,
  getBugData,
  assignBug,
  closeBug,
} from "../components/ServerConnections";

const BugDetail = ({ bugID }) => {
  const [bug, setBug] = useState();
  const [loading, setLoading] = useState(true);
  const { name } = useInfoContext();
  const navigate = useNavigate();
  const [assignInput, setAssignInput] = useState(false);
  const [assignUserName, setAssignUserName] = useState("");

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
    deleteBug(bugID).then(() => {
      navigate("/dashboard");
    });
  };

  const handleAssignBug = () => {
    if (assignInput && assignUserName !== "") {
      assignBug(bugID, assignUserName).then(navigate("/dashboard"));
    }
    setAssignInput(!assignInput);
  };

  const handleCloseBug = () => {
    closeBug(bugID).then(navigate("/dashboard"));
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
            {bug.bugStatus !== "Closed" ? (
              <>
                <button onClick={handleAssignBug}>Assing Bug</button>
                {assignInput ? (
                  <input
                    placeholder="Enter UserName"
                    value={assignUserName}
                    onChange={(event) => {
                      setAssignUserName(event.target.value);
                    }}
                  />
                ) : (
                  <></>
                )}

                {bug?.assignedTo === name || bug.createdBy === name ? (
                  <button onClick={handleCloseBug}>Close Bug</button>
                ) : (
                  <></>
                )}
              </>
            ) : (
              <></>
            )}
            {bug?.createdBy === name ? (
              <button onClick={handleDeleteBug}>Delete</button>
            ) : (
              <></>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default BugDetail;
