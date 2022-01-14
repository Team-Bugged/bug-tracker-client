import { useState, useEffect } from "react";
import { BugBar } from "./BugBar";
import { getBugData } from "./ServerConnections";

const BugList = ({ bugs }) => {
  const [bugList, setBugList] = useState([]);

  useEffect(() => {
    bugs.map((bugID) => {
      getBugData(bugID).then((bug) => {
        setBugList((prevList) => {
          setBugList([...prevList, bug]);
        });
      });
    });
  }, []);

  return (
    <>
      {bugList.map((bug) => {
        return (
          <BugBar
            key={bug._id}
            bugID={bug._id}
            bugTitle={bug.bugTitle}
            bugSeverity={bug.bugSeverity}
            bugDueDate={bug.bugDueDate}
            createdBy={bug.createdBy}
          />
        );
      })}
    </>
  );
};

export default BugList;
