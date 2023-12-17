import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer-alt">
        <div className="icons">
          <a href="#tw">
            {" "}
            <i className="fa-brands fa-twitter fa-2x"></i>
          </a>
          <a href="#fb">
            <i className="fa-brands fa-facebook fa-2x"></i>
          </a>
          <a href="#ins">
            <i className="fa-brands fa-instagram fa-2x"></i>
          </a>
          <a href="#gh">
            <i className="fa-brands fa-github fa-2x"></i>
          </a>
        </div>
        <p>
          {" "}
          <span className="anime">Designed by CSKN &nbsp; </span> &copy;
          Copyright &nbsp; {new Date().toLocaleDateString()}{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
