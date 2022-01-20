import { useState, useEffect } from "react";
import { loginUser, getUserData } from "../ServerConnections";
import { useNavigate } from "react-router-dom";
import { useInfoContext } from "../Context";
import { CircularProgress } from "@mui/material";

const LoginForm = () => {
  const { setName, setIsLoggedIn } = useInfoContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabledFlag, setDisabledFlag] = useState(true);
  // const cookies = new Cookies();
  const navigate = useNavigate();
  const [isLoading, setisLoading] = useState(false);

  const handleEmailChange = (input) => {
    setEmail(input.target.value);
  };

  const handlePasswordChange = (input) => {
    setPassword(input.target.value);
  };
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    setisLoading(true);
    loginUser(email, password)
      .then((token) => {
        localStorage.setItem("token", `${token}`);
        setIsLoggedIn(true);
        console.log(localStorage.getItem("token"));
        getUserData().then((data) => {
          setName(data.username);
          console.log(data.username);
          navigate("/dashboard");
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setDisabledFlag(false);
    if (email === "" || password === "") {
      setDisabledFlag(true);
    }
  }, [email, password]);

  return (
    <>
      <div className="login-page">
        <div className="form">
          <div className="login">
            <div className="login-header">
              <h3>Sign In</h3>
              <p>Please enter your credentials to signin.</p>
            </div>
            <form className="login-form">
              <div>
                <label for="email">
                  <b>Email</b>
                </label>
                <br />
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  onChange={handleEmailChange}
                  required
                />
                <br />
                <label for="password">
                  <b>Password</b>
                </label>
                <br />
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  onChange={handlePasswordChange}
                  required
                />
                <br />
                <button
                  className="signin-btn"
                  disabled={disabledFlag}
                  onClick={handleLoginSubmit}
                >
                  {isLoading ? <CircularProgress /> : "Sign In"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export { LoginForm };
