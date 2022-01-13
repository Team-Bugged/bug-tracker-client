import { useState, useEffect } from "react";
import { getProjects, getBugs } from "./ServerConnections";
import { ProjectBar } from "./ProjectBar";
import { BugBar } from "./BugBar";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AssignmentIcon from '@mui/icons-material/Assignment';

export default function ProjectsBugsDashboard() {
  const [projectsArray, setProjectsArray] = useState([]);
  const [bugsArray, setBugsArray] = useState([]);

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
    <Paper className="jss17" variant="outlined" >
    <AssignmentIcon
          fontSize="large"
          color="primary"
        />
    
        <div>
          <Typography variant='h6' color="secondary">
            All Projects
          </Typography>
          <Typography
            variant='subtitle1'
            color="secondary"
          >
            List of all the created or joined projects.
          </Typography>
        </div>
      </Paper>
    <Box sx={{ flexGrow: 1}}>
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
    <br/>
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
  );
}


// const ProjectsBugsDashboard = () => {
//   const [projectsArray, setProjectsArray] = useState([]);
//   const [bugsArray, setBugsArray] = useState([]);

//   useEffect(() => {
//     getProjects().then((data) => {
//       setProjectsArray(data);
//     });

//     getBugs().then((data) => {
//       setBugsArray(data);
//     });
//   }, []);

//   return (
//     <>
//       <div className="project-bar">
//         <div>Project Title</div>
//         <div>Project Status</div>
//         <div>Project StartDate</div>
//         <div>Project Owner</div>
//       </div>
//       {projectsArray.map((project) => (
//         <ProjectBar
//           key={project._id}
//           projectTitle={project.projectTitle}
//           projectStatus={project.projectStatus}
//           projectStartDate={project.projectStartDate}
//           projectOwner={project.projectOwner}
//         />
//       ))}
//       <br />
      // <div className="project-bar">
      //   <div>Bug Title</div>
      //   <div>Bug Severity</div>
      //   <div>Bug DueDate</div>
      //   <div>Bug Created By</div>
      // </div>
      // {bugsArray.map((bug) => (
      //   <BugBar
      //     key={bug._id}
      //     bugID={bug._id}
      //     bugTitle={bug.bugTitle}
      //     bugSeverity={bug.bugSeverity}
      //     bugDueDate={bug.bugDueDate}
      //     createdBy={bug.createdBy}
      //   />
      // ))}
//     </>
//   );
// };

// export default ProjectsBugsDashboard;
