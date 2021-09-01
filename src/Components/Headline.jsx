import React, { useContext, useState, useEffect } from "react";
import "./Headline.css";
import AppContext from "../context/AppContext";
import { Link } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";

function Headline() {
  return (
    <div className="return-wrap">
      <Link to="/">
        <button className="return-btn">
          {" "}
          <FaArrowAltCircleLeft />
        </button>
      </Link>
    </div>
  );
}

export default Headline;
