import Navbar from "../components/navbar/Navbar";
import { useInfoContext } from "../components/Context";
import { useNavigate } from "react-router-dom";
import ProjectsBugsDashboard from "../components/ProjectsBugsDashboard";

const Dashboard = () => {
  const { isLoggedIn } = useInfoContext();
  const navigate = useNavigate();
  return (
    <>
      {isLoggedIn === true ? <Navbar /> : <p>Not logged in</p>}
      <ProjectsBugsDashboard />
    </>
  );
};

export default Dashboard;
