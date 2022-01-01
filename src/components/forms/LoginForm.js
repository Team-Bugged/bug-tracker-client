import { useState, useEffect } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabledFlag, setDisabledFlag] = useState(true);

  const handleEmailChange = (input) => {
    setEmail(input.target.value);
  };

  const handlePasswordChange = (input) => {
    setPassword(input.target.value);
  };
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
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
