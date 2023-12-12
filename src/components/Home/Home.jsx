import React from "react";
import Navbar from "../Navbar/Navbar";
import Contact from "../Contact/Contact";
import Skills from "../Skills/Skills";
import "./Home.css";
import Certifications from "../Certifications/Certifications";
import About from "../About/About";
import Projects from "../Projects/Projects";
import {
  SiLeetcode,
  SiCodechef,
  SiCodeforces,
  SiGeeksforgeeks,
  SiCodingninjas,
  SiHackerearth,
  SiHackerrank,
} from "react-icons/si";

const Home = () => {
  return (
    <div className="home">
      <div className="navBar">
        <Navbar />
      </div>
      <div className="about">
        <div className="about-left-content">
          <div className="about-name">
            Software Engineer / Competitive Programmer
          </div>
          <div className="about-info">
            <ul>
              <li>
                Software Engineering Intern with hands-on experience in{" "}
                <b>full-stack development</b>.
              </li>
              <li>
                Accomplished coder recognized with the prestigious{" "}
                <b>Knight badge</b> on LeetCode.
              </li>
              <li>
                Concluded impactful internship at <b>DesiQna</b>, contributing
                to a responsive webpage's design and development.
              </li>
            </ul>
          </div>
          <div className="connect">
            <button
              onClick={() => {
                window.location.href = "//linkedin.com/in/naveen-chokkapu";
              }}
            >
              Connect
            </button>
            <button
              onClick={() => {
                window.location.href =
                  "//drive.google.com/file/d/1o6FkNfBHvlFGoCe2FUcI7A1jwpqXHYqe/view?usp=sharing";
              }}
            >
              Resume
            </button>
          </div>
          <div className="contact-name">Coding Profiles -</div>
          <div className="contact-info">
            <div className="contact-details">
              <div
                className="plitem"
                onClick={() => {
                  window.location.href = "//leetcode.com/naveen-chokkapu";
                }}
              >
                {/* <SiLeetcode /> */}
                <img src="LC.png" alt="" height={80} width={80} />
              </div>
              <div
                className="plitem"
                onClick={() => {
                  window.location.href = "//codechef.com/users/naveen_05_03";
                }}
              >
                {/* <SiCodechef /> */}
                <img src="CC.jpeg" alt="" height={80} width={80} />
              </div>
              <div
                className="plitem"
                onClick={() => {
                  window.location.href = "//codeforces.com/profile/naveen_18";
                }}
              >
                {/* <SiCodeforces /> */}
                <img src="CF.jpeg" alt="" height={80} width={80} />
              </div>
              <div
                className="plitem"
                onClick={() => {
                  window.location.href =
                    "//auth.geeksforgeeks.org/user/chokkapunaveen260503";
                }}
              >
                {/* <SiGeeksforgeeks /> */}
                <img src="GFG.jpeg" alt="" height={80} width={80} />
              </div>
              <div
                className="plitem"
                onClick={() => {
                  window.location.href =
                    "//www.codingninjas.com/studio/profile/cbfb3000-466d-477e-9884-ff42a3413d99";
                }}
              >
                {/* <SiCodingninjas /> */}
                <img src="CN.png" alt="" height={80} width={80} />
              </div>
              <div
                className="plitem"
                onClick={() => {
                  window.location.href =
                    "//www.hackerearth.com/@chokkapunaveen260503";
                }}
              >
                {/* <SiHackerearth /> */}
                <img src="HE.jpeg" alt="" height={80} width={80} />
              </div>
              <div
                className="plitem"
                onClick={() => {
                  window.location.href =
                    "//www.hackerrank.com/profile/20L31A0553";
                }}
              >
                {/* <SiHackerrank /> */}
                <img src="HR.png" alt="" height={80} width={80} />
              </div>
            </div>
          </div>
        </div>
        <div className="about-right-content">
          <img src="" alt="" height={500} width={500} />
        </div>
      </div>
      <div className="About">
        <About />
      </div>
      <div className="SkillS">
        <Skills />
      </div>
      <div className="ProJects">
        <Projects />
      </div>
      <div className="CertifiCations">
        <Certifications />
      </div>
      <div className="ContaCt">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
