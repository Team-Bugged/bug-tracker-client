const axios = require("axios").default;

export const registerUser = async (name, username, userEmail, userPassword) => {
  let response;
  try {
    response = await axios.post("http://localhost:5000/signup", {
      name: name,
      username: username,
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

export const getUserData = async () => {
  let response;
  console.log(localStorage.getItem("token"));
  try {
    response = await axios.get("http://localhost:5000/getInfo", {
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return response.data;
  } catch (err) {
    return err;
  }
};

export const getProjectData = async (projectID) => {
  console.log(projectID);
  let response;
  try {
    response = await axios.get("http://localhost:5000/getprojectinfo", {
      params: {
        projectID: projectID,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (err) {
    return err;
  }
};

export const getBugData = async (id) => {
  let response;
  try {
    response = await axios.get("http://localhost:5000/getBugInfo", {
      params: {
        id: id,
      },
    });
    return response.data;
  } catch (err) {
    return err;
  }
};

export const getProjects = async () => {
  let response;
  try {
    response = await axios.get("http://localhost:5000/getprojectsforauser", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (err) {
    return err;
  }
};

export const getBugs = async () => {
  let response;
  try {
    response = await axios.get("http://localhost:5000/getbugsforauser", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (err) {
    return err;
  }
};

export const addProject = async (
  projectTitleParam,
  projectDescriptionParam
) => {
  let response;
  try {
    response = await axios.post(
      "http://localhost:5000/addproject",
      {
        projectTitle: projectTitleParam,
        projectDescription: projectDescriptionParam,
      },
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    return err;
  }
};

export const addBug = async (
  projectID,
  bugTitle,
  bugDescription,
  bugSeverity,
  bugDueDate
) => {
  let response;
  try {
    response = await axios.post(
      "http://localhost:5000/addbug",
      {
        projectID: projectID,
        bugTitle: bugTitle,
        bugDescription: bugDescription,
        bugSeverity: bugSeverity,
        bugDueDate: bugDueDate,
      },
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    return err;
  }
};
