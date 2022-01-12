import React from "react";
import { useState } from "react";
import { getUserData } from "../forms/ServerConnections";
import Cookies from "universal-cookie/es6";

const DropDownCard = ({ setOpen }) => {
  const cookies = new Cookies();
  const [user, setUser] = useState("");
  getUserData().then((data) => {
    // console.log(cookies.get("token"));
    setUser(data.userName);
  });
  return (
    <>
      <div>
        <ul onClick={() => setOpen(false)}>{user}</ul>
        <ul>
          <button>Log Out</button>
        </ul>
      </div>
    </>
  );
};

export default DropDownCard;
