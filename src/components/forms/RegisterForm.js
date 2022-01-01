import { useEffect, useState } from "react";

const RegisterForm = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [disabledFlag, setDisabledFlag] = useState(true);

  let passwordMatch = password === confirmPassword ? true : false;

  const handleNameChange = (input) => {
    setUserName(input.target.value);
  };

  const handleEmailChange = (input) => {
    setEmail(input.target.value);
  };

  const handlePasswordChange = (input) => {
    setPassword(input.target.value);
  };

  const handleConfirmPasswordChange = (input) => {
    setConfirmPassword(input.target.value);
  };

  useEffect(() => {
    passwordMatch = password === confirmPassword ? true : false;

    setDisabledFlag(false);
    if (
      userName === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setDisabledFlag(true);
    }
  }, [userName, email, password, confirmPassword, disabledFlag]);

  const handleRegisterSubmit = (event) => {
    event.preventDefault();

    console.log(passwordMatch);
    if (!passwordMatch) {
      alert("Password and current password not matched");
    }

    console.log(userName, email, password, confirmPassword);
    setUserName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="name"
          value={userName}
          onChange={handleNameChange}
        />
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <input
          type="password"
          placeholder="confirm password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        <button disabled={disabledFlag} onClick={handleRegisterSubmit}>
          Submit
        </button>
      </form>
    </>
  );
};

export { RegisterForm };
