import { useState, useEffect } from "react";
import { getProjects, getBugs } from "./ServerConnections";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import BugReportIcon from "@mui/icons-material/BugReport";
import Button from "@mui/material/Button";

import AssignmentIcon from "@mui/icons-material/Assignment";
import BugListMaterialUI from "./BugListMaterialUI";

const ProjectsBugsDashboard = () => {
  const projectTableHeaders = ["Name", "Status", "Created on", "Owner", "Bugs"];
  const [projectsArray, setProjectsArray] = useState([]);
  const [bugsArray, setBugsArray] = useState([]);

  const navigate = useNavigate();
  const handleProjectClick = (projectID) => {
    navigate(`/project/${projectID}`);
  };

  const handleAddProject = () => {
    navigate("/addproject");
  };

  useEffect(() => {
    getProjects().then((data) => {
      setProjectsArray(data);
    });

    getBugs().then((data) => {
      setBugsArray(data);
    });
  }, []);

  return (
    <>
      <Paper className="jss17" variant="outlined">
        <AssignmentIcon fontSize="large" color="primary" />

        <div className="detaildiv">
          <Typography variant="h6">All Projects</Typography>
          <Typography variant="subtitle1">
            List of all the created or joined projects.
          </Typography>
        </div>
      </Paper>
      <Paper className="detailpaper" variant="outlined">
        <button className="green-btn" onClick={handleAddProject}>
          <AddIcon className="addicon" fontSize="small" color="primary" />
          Add Project
        </button>
        <Table>
          <TableHead>
            <TableRow className="mainrow">
              {projectTableHeaders.map((t) => (
                <TableCell key={t} align="center">
                  {t}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody className="projecttablebody">
            {projectsArray.map((project) => (
              <TableRow className="projecttablerow"
                key={project._id}
                onClick={() => handleProjectClick(project._id)}
              >
                <TableCell align="center">{project.projectTitle}</TableCell>
                <TableCell align="center">{project.projectStatus}</TableCell>
                <TableCell align="center">{project.projectStartDate}</TableCell>
                <TableCell align="center">{project.projectOwner}</TableCell>
                <TableCell align="center">{project.bugs.length}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      <Paper className="jss17" variant="outlined">
        <BugReportIcon fontSize="large" color="error" />

        <div className="detaildiv">
          <Typography variant="h6">Bugs</Typography>
          <Typography variant="subtitle1">
            List of all bugs created by or assigned to user.
          </Typography>
        </div>
      </Paper>

      <BugListMaterialUI bugsArray={bugsArray} />
    </>
  );
};

export default ProjectsBugsDashboard;
