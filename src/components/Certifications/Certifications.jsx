import React from "react";
import { useState } from "react";
import "./Certifications.css";

const Certifications = () => {
  const [Hide, setHide] = useState(false);
  return (
    <div className="certification">
      <div className="certify">
        <div className="cname">Certifications -</div>
        <div className="citems">
          <div className="citem">
            <img src="CCDSA.jpeg" alt="" width={400} height={300} />
          </div>
          <div className="citem">
            <img src="INTRO-TO-CPP.jpeg" alt="" width={400} height={300} />
          </div>
          <div className="citem">
            <img src="NPTEL-DBMS.jpeg" alt="" width={400} height={300} />
          </div>
        </div>
        <div className="citems">
          <div className="citem">
            <img src="FULLSTACK.jpg" alt="" width={400} height={300} />
          </div>
          <div className="citem">
            <img src="CODEJAM.jpeg" alt="" width={400} height={300} />
          </div>
          {!Hide && (
            <div className="citem">
              <div className="btn">
                <button
                  onClick={() => {
                    setHide(Hide ^ 1);
                  }}
                >
                  {"View More"}
                </button>
              </div>
            </div>
          )}
          {Hide && (
            <div className="citem">
              <img src="ProblemSolving.png" alt="" height={300} width={400} />
            </div>
          )}
        </div>
        {Hide && (
          <div className="citems">
            <div className="citem">
              <img src="Sql.png" alt="" height={300} width={400} />
            </div>
            <div className="citem">
              <img src="Java.png" alt="" height={300} width={400} />
            </div>
            <div className="citem">
              <img src="Python.png" alt="" height={300} width={400} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Certifications;
