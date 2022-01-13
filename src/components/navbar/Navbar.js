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
    </>
  );
};

export default Navbar;
