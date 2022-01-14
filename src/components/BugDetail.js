import { useEffect, useState } from "react";
import { useInfoContext } from "../components/Context";
import { useNavigate } from "react-router-dom";
import {
  deleteBug,
  getBugData,
  assignBug,
  closeBug,
  updateBug,
} from "../components/ServerConnections";
import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import Navbar from "./navbar/Navbar";

const BugDetail = ({ bugID }) => {
  const [bug, setBug] = useState();
  const [loading, setLoading] = useState(true);
  const { name } = useInfoContext();
  const navigate = useNavigate();
  const [assignInput, setAssignInput] = useState(false);
  const [assignUserName, setAssignUserName] = useState("");
  const [bugTitle, setBugTitle] = useState("");
  const [bugDescription, setBugDescription] = useState("");
  const [bugSeverity, setBugSeverity] = useState("low");
  const [bugDueDate, setBugDueDate] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const handleEditBugDetails = () => {
    setBugTitle(bug.bugTitle);
    setBugDescription(bug.bugDescription);
    setBugDueDate(bug.bugDueDate);
    setBugSeverity(bug.bugSeverity);
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const handleEditBugSubmit = () => {
    updateBug(bugTitle, bugDescription, bugSeverity, bugDueDate, bugID);
    window.location.reload();
  };
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

  // useEffect(() => {
  //   console.log("update");
  // }, [bugTitle, bugDescription, bugSeverity, bugDueDate]);

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
          <Navbar />
          <Modal open={openModal} onClose={handleModalClose}>
            <Box sx={style}>
              <label>Bug Title</label>
              <br />
              <input
                value={bugTitle}
                onChange={(input) => {
                  setBugTitle(input.target.value);
                }}
                required
              />
              <br />
              <label>Bug Description</label>
              <br />
              <input
                value={bugDescription}
                onChange={(input) => {
                  setBugDescription(input.target.value);
                }}
                required
              />
              <br />
              <label>Bug Severity</label>
              <br />
              <select
                required
                value={bugSeverity}
                onChange={(input) => {
                  setBugSeverity(input.target.value);
                }}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
              <br />
              <label>Bug Duedate</label>
              <br />
              <input
                className="duedate"
                type="date"
                value={bugDueDate}
                onChange={(event) => {
                  setBugDueDate(event.target.value);
                }}
                required
              />
              <button onClick={handleEditBugSubmit}>Update</button>
            </Box>
          </Modal>
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
            <p>{bug.bugDueDate}</p>
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
              <>
                <button onClick={handleDeleteBug}>Delete</button>
                <button onClick={handleEditBugDetails}>Update Bug</button>
              </>
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
