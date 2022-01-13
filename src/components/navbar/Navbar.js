import "../../App.css";
import { useInfoContext } from "../Context";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { name, setIsLoggedIn } = useInfoContext();
  const handleLogOut = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };
  return (
    <>
      <div className="navbar">
        <ul>
          <li>{name}</li>
          <li>
            <button onClick={handleLogOut}>Logout</button>
          </li>
        </ul>
      </div>
      {/* <div className="navbar">
        <div className="navbar-username">{name}</div>
        <button className="navbar-button" onClick={handleLogOut}>
          Logout
        </button>
      </div> */}
    </>
  );
};

export default Navbar;
