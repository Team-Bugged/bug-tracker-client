import {
  getProjectData,
  updateProject,
  getBugsForAProject,
  addDeveloper,
} from "../components/ServerConnections";
import Navbar from "./navbar/Navbar";
import { useEffect, useState } from "react";
import { useInfoContext } from "../components/Context";
import { useNavigate } from "react-router-dom";
import BugList from "./BugList";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
  Stack,
} from "@mui/material";
import { deleteProject, closeProject } from "../components/ServerConnections";
import BugListMaterialUI from "./BugListMaterialUI";

const ProjectDetail = ({ projectID }) => {
  const [project, setProject] = useState();
  const [bugsArray, setBugsArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const { name } = useInfoContext();
  const navigate = useNavigate();
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
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [addDeveloperInputDisplay, setAddDeveloperInputDisplay] =
    useState(false);
  const [developerUserName, setDeveloperUserName] = useState("");

  useEffect(() => {
    getProjectData(projectID)
      .then((data) => {
        setProject(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
    getBugsForAProject(projectID)
      .then((data) => {
        setBugsArray(data);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleDeleteProject = () => {
    console.log("kya");
    deleteProject(projectID, project.bugs);
    navigate("/dashboard");
  };

  const handleAddBug = () => {
    console.log("no");
    navigate(`/project/${projectID}/addbug`);
  };

  const handleEditProjectDetails = () => {
    setProjectTitle(project.projectTitle);
    setProjectDescription(project.projectDescription);
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const handleEditProjectSubmit = () => {
    updateProject(projectID, projectTitle, projectDescription).then(() => {
      navigate("/dashboard");
    });
  };

  const handleCloseProject = () => {
    closeProject(projectID).then(() => {
      window.location.reload();
    });
  };

  const handleAddDeveloper = () => {
    if (addDeveloperInputDisplay) {
      addDeveloper(developerUserName, projectID).then(() => {
        window.location.reload();
      });
    }
    // console.log(addDeveloperInputDisplay);
    setAddDeveloperInputDisplay(!addDeveloperInputDisplay);
    setDeveloperUserName("");
  };
  return (
    <>
      {loading ? (
        "Loading "
      ) : (
        <>
          <Modal open={openModal} onClose={handleModalClose}>
            <Box sx={style}>
              <label>Project Title</label>
              <br />
              <input
                value={projectTitle}
                onChange={(e) => {
                  setProjectTitle(e.target.value);
                }}
              />
              <br />
              <label>Project Description</label>
              <br />
              <input
                value={projectDescription}
                onChange={(e) => {
                  setProjectDescription(e.target.value);
                }}
              />
              <br />
              <button className="green-btn" onClick={handleEditProjectSubmit}>
                Update
              </button>
            </Box>
          </Modal>
          <Navbar />
          <Paper className="projectdescp">
            <div>
              <h1>{project?.projectTitle}</h1>
              <p className="statusdiv">
                <i>{project?.projectDescription}</i>
              </p>
            </div>

            <Stack spacing={2} direction="row">
              <Button onClick={handleEditProjectDetails} variant="contained">
                Edit Project Detail
              </Button>
              <Button onClick={handleAddBug} variant="contained">
                Add Bug
              </Button>

              {project?.projectOwner === name ? (
                <>
                  <Button
                    onClick={handleCloseProject}
                    variant="contained"
                    color="error"
                  >
                    Close Project
                  </Button>
                  <Button
                    onClick={handleDeleteProject}
                    variant="contained"
                    color="error"
                  >
                    Delete
                  </Button>
                </>
              ) : (
                <></>
              )}
            </Stack>
          </Paper>
          <Paper className="projectpaper" variant="outlined">
            <div>
              <Accordion className="membersacc">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Contributors</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>
                            <AccountCircleIcon />
                          </TableCell>
                          <TableCell>{project.projectOwner}</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {project.projectDevelopers.map((username) => {
                          return (
                            <TableRow>
                              <TableCell>
                                <AccountCircleIcon />
                              </TableCell>
                              <TableCell>{username}</TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <Button onClick={handleAddDeveloper} variant="contained">
              Add Developers
            </Button>
            {addDeveloperInputDisplay ? (
              <input
                onChange={(e) => {
                  setDeveloperUserName(e.target.value);
                }}
                value={developerUserName}
              />
            ) : (
              <></>
            )}
            <div>
              <div>
                <p>
                  <strong>Project Owner: {project?.projectOwner}</strong>
                </p>
              </div>
              <div>
                Status: <p className="statusdiv">{project?.projectStatus}</p>
              </div>
              <div>
                <p>
                  <strong>Created On: {project?.projectStartDate}</strong>
                </p>
              </div>
            </div>
          </Paper>
          <BugListMaterialUI bugsArray={bugsArray} />
        </>
      )}
    </>
  );
};

export default ProjectDetail;
