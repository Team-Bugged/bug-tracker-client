import React, { useContext, useEffect, useState } from "react";
import Cookies from "universal-cookie/es6";
import { getUserData } from "./ServerConnections";

export const InfoContext = React.createContext();

export const InfoProvider = ({ children }) => {
  const cookies = new Cookies();
  const [name, setName] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  if (!isLoggedIn) {
    let obj = cookies.getAll();
    const len = Object.keys(obj).length;
    if (len > 0) {
      getUserData(cookies.get("token")).then((data) => {
        setName(data.userName);
      });
    }
  }

  return (
    <InfoContext.Provider value={{ name, setName, isLoggedIn, setIsLoggedIn }}>
      {children}
    </InfoContext.Provider>
  );
};

export const useInfoContext = () => {
  return useContext(InfoContext);
};
