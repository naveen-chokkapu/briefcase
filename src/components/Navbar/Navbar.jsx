import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="nav-bar">
      <div className="title">
        <div className="logo">
          <img src="NAVEEN-removebg.png" alt="" height={60} width={60} />
        </div>
        <div className="name">NAVEEN CHOKKAPU</div>
        <div className="items">
          <div
            className="item"
            onClick={() => {
              handleNavigate("/");
            }}
          >
            HOME
          </div>
          <div
            className="item"
            onClick={() => {
              handleNavigate("/about");
            }}
          >
            ABOUT
          </div>
          <div
            className="item"
            onClick={() => {
              handleNavigate("/skills");
            }}
          >
            SKILLS
          </div>
          <div
            className="item"
            onClick={() => {
              handleNavigate("/projects");
            }}
          >
            PROJECTS
          </div>
          <div
            className="item"
            onClick={() => {
              handleNavigate("/achievements");
            }}
          >
            ACHIEVEMENTS
          </div>
          <div
            className="item"
            onClick={() => {
              handleNavigate("/certifications");
            }}
          >
            CERTIFICATIONS
          </div>
          <div
            className="item"
            onClick={() => {
              handleNavigate("/contact");
            }}
          >
            CONTACT
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
