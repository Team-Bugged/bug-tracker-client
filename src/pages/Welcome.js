import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <div className="login-page">
        <div className="form">
          <div className="login">
            <div className="login-header">
              <h1>Welcome to Bug-Tracker</h1>
              <a href="/login">
                <button className="signin-btn">Login</button>
              </a>
              <a href="/Register">
                <button className="signup-btn">Register</button>
              </a>
              <a href="/login">
                <button className="dashboard-btn">Dashboard</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
