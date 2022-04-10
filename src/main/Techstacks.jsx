import React from "react";
import RubFont from "../custF/rubFont";
import "./Techstacks.css";
import {
  SiNodedotjs,
  SiReact,
  SiAmazonaws,
  SiBootstrap,
  SiMongodb,
  SiExpress,
  SiRedux,
  SiPaytm,
  SiJavascript,
  SiGithub,
  SiCss3,
  SiHtml5,
} from "react-icons/si";

export const Techstacks = () => {
  function handleHov(e) {
    e.target.className = `skillDiv animated swing ${e.target.id}`;
  }
  function handleExit(e) {
    setTimeout(() => {
      e.target.className = "skillDiv";
    }, 500);
  }
  return (
    <>
      <div className="d-flex align-items-center flex-column" id="stack">
        <h2 className="titleH2Tag">Skills 🏅</h2>
        <div className="stackGrid">
          <div
            className="skillDiv"
            onMouseEnter={handleHov}
            onMouseLeave={handleExit}
            id="SiJavascript"
          >
            <SiJavascript />
            <p>JavaScript</p>
          </div>
          <div
            className="skillDiv"
            onMouseEnter={handleHov}
            onMouseLeave={handleExit}
            id="twitter"
          >
            <SiReact />
            <p>React</p>
          </div>
          <div
            className="skillDiv"
            onMouseEnter={handleHov}
            onMouseLeave={handleExit}
            id="github"
          >
            <SiGithub />
            <p>Github</p>
          </div>
          <div
            className="skillDiv"
            onMouseEnter={handleHov}
            onMouseLeave={handleExit}
            id="SiNodedotjs"
          >
            <SiNodedotjs />
            <p>Nodejs</p>
          </div>
          <div
            className="skillDiv"
            onMouseEnter={handleHov}
            onMouseLeave={handleExit}
            id="SiCss3"
          >
            <SiCss3 />
            <p>CSS</p>
          </div>

          <div
            className="skillDiv"
            onMouseEnter={handleHov}
            onMouseLeave={handleExit}
            id="SiBootstrap"
          >
            <SiBootstrap />
            <p>Bootstrap</p>
          </div>
          <div
            className="skillDiv"
            onMouseEnter={handleHov}
            onMouseLeave={handleExit}
            id="SiHtml"
          >
            <SiHtml5 />
            <p>HTML</p>
          </div>
          <div
            className="skillDiv"
            onMouseEnter={handleHov}
            onMouseLeave={handleExit}
            id="SiBootstrap"
          >
            <SiRedux />
            <p>Redux</p>
          </div>
          <div
            className="skillDiv"
            onMouseEnter={handleHov}
            onMouseLeave={handleExit}
            id="whatsapp"
          >
            <SiMongodb />
            <p>Mongodb</p>
          </div>
          <div
            className="skillDiv"
            onMouseEnter={handleHov}
            onMouseLeave={handleExit}
            id="SiExpress"
          >
            <SiExpress />
            <p>ExpressJs</p>
          </div>
          <div
            className="skillDiv"
            onMouseEnter={handleHov}
            onMouseLeave={handleExit}
            id="SiPaytm"
          >
            <SiPaytm />
            <p>Gateway</p>
          </div>
          <div
            className="skillDiv"
            onMouseEnter={handleHov}
            onMouseLeave={handleExit}
            id="SiAmazonaws"
          >
            <SiAmazonaws />
            <p>AWS</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Techstacks;
