import "../../App.css";
import { useInfoContext } from "../Context";

const Navbar = () => {
  const { name, setIsLoggedIn } = useInfoContext();
  const handleLogOut = () => {
    // localStorage.removeItem("token");
    console.log("accha!");
  };
  return (
    <>
      <div className="navbar">
        <div className="navbar-username">{name}</div>
        <button className="navbar-button" onClick={handleLogOut}>
          Logout
        </button>
      </div>
    </>
  );
};

export default Navbar;
