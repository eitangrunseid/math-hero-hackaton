import React, { useContext, useState, useEffect } from "react";
import "./Headline.css";
import AppContext from "../context/AppContext";
import { Link } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { IconContext } from "react-icons";

function Headline() {
  return (
    <div className="return-wrap">
      <Link to="/">
        <button className="return-btn">
          <IconContext.Provider value={{ className: "goback-icon" }}>
            <FaArrowAltCircleLeft
              className="goback-icon"
              // style={{ background: "none", height: "50px", width: "50px" }}
            />
          </IconContext.Provider>
        </button>
      </Link>
    </div>
  );
}

export default Headline;
