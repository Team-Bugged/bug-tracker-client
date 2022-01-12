import React, { useContext, useEffect, useState } from "react";
import { getUserData } from "./ServerConnections";

export const InfoContext = React.createContext();

export const InfoProvider = ({ children }) => {
  // const cookies = new Cookies();
  const [name, setName] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // if (localStorage.getItem("token")) {
  //   getUserData(localStorage.getItem("token")).then((data) => {
  //     setName(data.userName);
  //   });
  //   setIsLoggedIn(true);
  // }

  // useEffect(() => {
  //   console.log("isLoggedIn: ", isLoggedIn);
  //   if (!isLoggedIn) {
  //     localStorage.removeItem("token");
  //   }
  // }, [isLoggedIn]);

  return (
    <InfoContext.Provider value={{ name, setName, isLoggedIn, setIsLoggedIn }}>
      {children}
    </InfoContext.Provider>
  );
};

export const useInfoContext = () => {
  return useContext(InfoContext);
};
