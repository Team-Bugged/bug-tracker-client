import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <h1>Welcome to Bug-Tracker</h1>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/Register">Register</Link>
    </>
  );
};

export default Welcome;
