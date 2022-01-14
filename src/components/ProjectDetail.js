import {
  getProjectData,
  updateProject,
  getBugsForAProject,
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
import { ariaHidden, Modal } from "@mui/material";
import Box from "@mui/material/Box";

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
import { deleteProject } from "../components/ServerConnections";
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
  return (
    <>
      {loading ? (
        "Loading "
      ) : (
        <>
          <Modal open={openModal} onClose={handleModalClose}>
            <Box sx={style}>
              <label>Project Title</label>
              <input
                value={projectTitle}
                onChange={(e) => {
                  setProjectTitle(e.target.value);
                }}
              />
              <br />
              <label>project description</label>
              <input
                value={projectDescription}
                onChange={(e) => {
                  setProjectDescription(e.target.value);
                }}
              />
              <br />
              <button onClick={handleEditProjectSubmit}>Update</button>
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
                <Button
                  onClick={handleDeleteProject}
                  variant="contained"
                  color="error"
                >
                  Delete
                </Button>
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
                          <TableCell>{project.projectOwner}</TableCell>
                          <TableCell>Joined On</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {project.projectDevelopers.map((username) => {
                          return (
                            <TableRow>
                              <TableCell>{username}</TableCell>
                              <TableCell>Joined On</TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>

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
