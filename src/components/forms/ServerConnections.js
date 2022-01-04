const axios = require("axios").default;

export const registerUser = async (userName, userEmail, userPassword) => {
  let response;
  try {
    response = await axios.post("http://localhost:5000/signup", {
      name: userName,
      email: userEmail,
      password: userPassword,
    });
    return response.status;
  } catch (err) {
    return err;
  }
};

export const loginUser = async (userEmail, userPassword) => {
  let response;
  try {
    response = await axios.post("http://localhost:5000/login", {
      email: userEmail,
      password: userPassword,
    });
    return response.data.token;
  } catch (err) {
    return err;
  }
};
