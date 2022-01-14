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

const ProjectsBugsDashboard = () => {
  const projectTableHeaders = ["Name", "Status", "Created on", "Owner", "Bugs"];
  const bugTableHeaders = ["Title", "Severity", "Created By", "Due Date"];
  const [projectsArray, setProjectsArray] = useState([]);
  const [bugsArray, setBugsArray] = useState([]);

  const navigate = useNavigate();
  const handleProjectClick = (projectID) => {
    navigate(`/project/${projectID}`);
  };
  const handleBugClick = (bugID) => {
    navigate(`/bug/${bugID}`);
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
        <button class="addproject" onClick={handleAddProject}>
          <AddIcon fontSize="small" />
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
          <TableBody>
            {projectsArray.map((project) => (
              <TableRow
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
      <Paper className="detailpaper" variant="outlined">
        <Table>
          <TableHead>
            <TableRow className="mainbugrow">
              {bugTableHeaders.map((t) => (
                <TableCell key={t} align="center">
                  {t}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {bugsArray.map((bug) => (
              <TableRow key={bug._id} onClick={() => handleBugClick(bug._id)}>
                <TableCell align="center">{bug.bugTitle}</TableCell>
                <TableCell align="center">{bug.bugSeverity}</TableCell>
                <TableCell align="center">{bug.createdBy}</TableCell>
                <TableCell align="center">{bug.bugDueDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      {/* <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <div className="project-bar">
                <div>Project Title</div>
                <div>Project Status</div>
                <div>Project StartDate</div>
                <div>Project Owner</div>
              </div>
              {projectsArray.map((project) => (
                <ProjectBar
                  key={project._id}
                  projectID={project._id}
                  projectTitle={project.projectTitle}
                  projectStatus={project.projectStatus}
                  projectStartDate={project.projectStartDate}
                  projectOwner={project.projectOwner}
                />
              ))}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box> 
      <br />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <div className="project-bar">
                <div>Bug Title</div>
                <div>Bug Severity</div>
                <div>Bug DueDate</div>
                <div>Bug Created By</div>
              </div>
              {bugsArray.map((bug) => (
                <BugBar
                  key={bug._id}
                  bugID={bug._id}
                  bugTitle={bug.bugTitle}
                  bugSeverity={bug.bugSeverity}
                  bugDueDate={bug.bugDueDate}
                  createdBy={bug.createdBy}
                />
              ))}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
    */}
    </>
  );
};

export default ProjectsBugsDashboard;
