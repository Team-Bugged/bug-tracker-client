import "../../App.css";
import { useInfoContext } from "../Context";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";

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
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar variant="dense">
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
                onClick={() => window.location.replace("/dashboard")}
              >
                Dashboard
              </Typography>
              <Typography variant="h6" color="inherit" component="div">
                {name}
              </Typography>
              <button className="signout-btn" onClick={handleLogOut}>
                Sign Out
              </button>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    </>
  );
};

export default Navbar;
