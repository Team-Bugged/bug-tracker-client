import Navbar from "../components/navbar/Navbar";
import { useInfoContext } from "../components/Context";
import { useNavigate } from "react-router-dom";
import ProjectsBugsDashboard from "../components/ProjectsBugsDashboard";
import { useEffect } from "react";

const Dashboard = () => {
  const { loginCheck } = useInfoContext();

  const navigate = useNavigate();
  useEffect(() => {
    loginCheck();
  }, []);
  return (
    <>
      <Navbar />
      <ProjectsBugsDashboard />
    </>
  );
};

export default Dashboard;
