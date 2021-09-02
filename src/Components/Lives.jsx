import React, { useContext, useState, useEffect } from "react";
import "./Lives.css";
import AppContext from "../context/AppContext";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";

function Lives() {
  const { lives, userName, level } = useContext(AppContext);

  return (
    <div className="lives-wrap">
      <div style={{ fontSize: "20px" }}>{userName}</div>
      <div className="lives">
        <div className="heart-wrap">
          {lives > 0 ? <IoIosHeart /> : <IoIosHeartEmpty />}
        </div>
        <div className="heart-wrap">
          {lives > 1 ? <IoIosHeart /> : <IoIosHeartEmpty />}
        </div>
        <div className="heart-wrap">
          {lives > 2 ? <IoIosHeart /> : <IoIosHeartEmpty />}
        </div>
        <div className="heart-wrap">
          {lives > 3 ? <IoIosHeart /> : <IoIosHeartEmpty />}
        </div>
        <div className="heart-wrap">
          {lives > 4 ? <IoIosHeart /> : <IoIosHeartEmpty />}
        </div>
      </div>
      <div style={{ fontSize: "20px" }}>lvl.{level}</div>
    </div>
  );
}

export default Lives;
