import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Skills.css";
import { TbBrandCpp, TbBrandVscode } from "react-icons/tb";
import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { DiJavascript1, DiMysql, DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";

const Skills = () => {
  return (
    <div className="contact">
      {/* <div className="navBar">
        <Navbar />
      </div> */}
      <div className="skill-left">
        <div className="contact-template">
          <div className="PL">
            <div className="contact-name">Programming Languages -</div>
            <div className="contact-info">
              <div className="contact-details">
                <div className="plitem">
                  <TbBrandCpp />
                </div>
                <div className="plitem">
                  <FaJava />
                </div>
                <div className="plitem">
                  <FaPython />
                </div>
                <div className="plitem">
                  <DiJavascript1 />
                </div>
              </div>
            </div>

            <div className="contact-name">Web Development -</div>
            <div className="contact-info">
              <div className="contact-details">
                <div className="plitem">
                  <FaHtml5 />
                </div>
                <div className="plitem">
                  <FaCss3Alt />
                </div>
                <div className="plitem">
                  <FaReact />
                </div>
                <div className="plitem">
                  <FaNodeJs />
                </div>
                <div className="plitem">
                  <SiExpress />
                </div>
              </div>
            </div>

            <div className="contact-name">Databases and Tools -</div>
            <div className="contact-info">
              <div className="contact-details">
                <div className="plitem">
                  <DiMongodb />
                </div>
                <div className="plitem">
                  <DiMysql />
                </div>
                <div className="plitem">
                  <FaGitAlt />
                </div>
                <div className="plitem">
                  <FaGithub />
                </div>
                <div className="plitem">
                  <TbBrandVscode />
                </div>
              </div>
            </div>
          </div>

          <div className="skill-right">
            <div className="skill-name"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
