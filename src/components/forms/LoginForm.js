import { useState, useEffect } from "react";
import { loginUser, getUserData } from "../ServerConnections";
import Cookies from "universal-cookie/es6";
import { useNavigate } from "react-router-dom";
import { useInfoContext } from "../Context";

const LoginForm = () => {
  const { setName, setIsLoggedIn } = useInfoContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabledFlag, setDisabledFlag] = useState(true);
  const cookies = new Cookies();
  const navigate = useNavigate();

  const handleEmailChange = (input) => {
    setEmail(input.target.value);
  };

  const handlePasswordChange = (input) => {
    setPassword(input.target.value);
  };
  const handleLoginSubmit = (event) => {
    event.preventDefault();

    loginUser(email, password)
      .then((token) => {
        cookies.set("token", `${token}`, { path: "/" });
      })
      .catch((err) => {
        console.log(err);
      });

    getUserData().then((data) => {
      setName(data.userName);
      setIsLoggedIn(true);
      navigate("/dashboard");
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
      <form>
        <input type="text" placeholder="email" onChange={handleEmailChange} />
        <input
          type="password"
          placeholder="password"
          onChange={handlePasswordChange}
        />
        <button disabled={disabledFlag} onClick={handleLoginSubmit}>
          Submit
        </button>
      </form>
    </>
  );
};

export { LoginForm };
