import React from "react";
import "./NotFound.css";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="notFound">
      <button onClick={() => navigate("/")} className="btn btn-success">
        {" "}
        GO HOME PAGE
      </button>
    </div>
  );
};

export default NotFound;
