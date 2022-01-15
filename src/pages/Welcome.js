import { Link } from "react-router-dom";
import BugReportIcon from "@mui/icons-material/BugReport";

const Welcome = () => {
  return (
    <>
      <div className="login-page">
        <div className="form">
          <div className="login">
            <div className="login-header">
              <h1>Welcome to Bug-Tracker</h1>
              <div className="welcomeicon">
                <BugReportIcon style={{fontSize:50}}/>
              </div>
              
              
              <Link to="/login">
                <button className="signin-btn">Login</button>
              </Link>
              <Link to="/register">
              <button className="signup-btn">Register</button></Link>
                
             
              <Link to="/dashboard" >
                <button className="dashboard-btn">Dashboard</button>
              </Link>
                
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
