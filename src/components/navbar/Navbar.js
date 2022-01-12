import "../../App.css";
import { useInfoContext } from "../Context";

const Navbar = () => {
  const { name } = useInfoContext();
  return (
    <>
      <div className="navbar">
        <div className="navbar-username">{name}</div>
        <button className="navbar-button">Logout</button>
      </div>
    </>
  );
};

export default Navbar;
