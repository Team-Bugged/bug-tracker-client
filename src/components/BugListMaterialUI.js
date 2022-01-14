import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BugListMaterialUI = ({ bugsArray }) => {
  useEffect(() => {
    console.log("bugsArray", bugsArray);
  }, []);
  const navigate = useNavigate();
  const bugTableHeaders = [
    "Title",
    "Severity",
    "Created By",
    "Status",
    "Due Date",
  ];
  const handleBugClick = (bugID) => {
    navigate(`/bug/${bugID}`);
  };

  return (
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
        <TableBody className="bugtablebody">
          {bugsArray.map((bug) => (
            <TableRow key={bug._id} onClick={() => handleBugClick(bug._id)}>
              <TableCell align="center">{bug.bugTitle}</TableCell>
              <TableCell align="center">{bug.bugSeverity}</TableCell>
              <TableCell align="center">{bug.createdBy}</TableCell>
              <TableCell align="center">{bug.bugStatus}</TableCell>
              <TableCell align="center">{bug.bugDueDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default BugListMaterialUI;
