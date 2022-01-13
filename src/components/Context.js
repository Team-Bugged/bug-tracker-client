import React, { useContext, useEffect, useState } from "react";
import { getUserData } from "./ServerConnections";

export const InfoContext = React.createContext();

export const InfoProvider = ({ children }) => {
  // const cookies = new Cookies();
  const [name, setName] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getUserData().then((data) => {
        setName(data.username);
        console.log(data.username);
      });
      setIsLoggedIn(true);
    }
    console.log("isLoggedIn: ", isLoggedIn);
  }, []);

  return (
    <InfoContext.Provider value={{ name, setName, isLoggedIn, setIsLoggedIn }}>
      {children}
    </InfoContext.Provider>
  );
};

export const useInfoContext = () => {
  return useContext(InfoContext);
};
