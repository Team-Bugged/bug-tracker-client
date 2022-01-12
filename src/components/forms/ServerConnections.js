import Cookies from "universal-cookie/es6";

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

export const getUserData = async (token) => {
  let response;
  const cookies = new Cookies();
  try {
    response = await axios.get("http://localhost:5000/getInfo", {
      headers: {
        authorization: "Bearer " + cookies.get("token"),
      },
    });
    return response.data;
  } catch (err) {
    return err;
  }
};

export const getProjectData = async (id) => {
  let response;
  try {
    response = await axios.get("http://localhost:5000/getProjectInfo", {
      id: id,
    });
    return response.data;
  } catch (err) {
    return err;
  }
};

export const getBugData = async (id) => {
  let response;
  try {
    response = await axios.get("http://localhost:5000/getBugInfo", {
      id: id,
    });
    return response.data;
  } catch (err) {
    return err;
  }
};
