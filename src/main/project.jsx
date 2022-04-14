let list = [
  {
    Img: "https://ik.imagekit.io/itsVaibhav/croma",
    time: " feb 2022",
    title: "croma clone",
    detail:
      "Croma is an Indian electronics retail chain with an online store as well \nFeatures:\n1. Add to Cart and Edit Cart Items feature\n2. Apply Promo Code feature on Cart page\n3. Multiple delivery options with estimated time \n Tech Stack: HTML | CSS | Javascript | React | Node |\nMongoDB",
    git: "https://github.com/Vaibhav-Solanki/cromaExpress",
    link: "https://cromaexpress.herokuapp.com/",
    Blog: "#",
  },
  {
    Img: "https://ik.imagekit.io/itsVaibhav/plum",
    time: " Dec 2021",
    title: "Plumgoodness",
    detail:
      "An e-commerce web application providing a wide range of skincare products.Features:-> Social Sign-in/Sign-up-> Cart and Payment Functionality->Detailed Product pagesTech Stack: HTML | CSS | JavaScript",
    git: "https://github.com/Abhishekkp42/E-commerce-Plumgoodness",
    link: "https://plumgoodness-clone-rohit-2021.netlify.app/",
    Blog: "#",
  },
];
import React from "react";
import "./Projects.css";
import { FaReact } from "react-icons/fa";
import { SiHtml5, SiExpress, SiMongodb, SiNodedotjs } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section" id="project">
        <h2 className="titleH2Tag" data-aos="fade-right">
          Projects 🏅
        </h2>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://ik.imagekit.io/itsVaibhav/acko.png"
                  alt="Acko"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Acko Insurance</h2>
              <p>
                used otp auth and paytm payment gatway, First Backend Project
                with NodeJS, ExpressJS and MongoDB. Used EJS to render views.
                Main functionalities were : Register/Login using JWT, Sorting
                and Filtering in the backend, Cart and Wish List and many more.
              </p>
              <div>
                <FaReact />
                <SiHtml5 />
                <IoLogoJavascript />
                <SiNodedotjs />
                <SiExpress />
                <SiMongodb />
              </div>
              <div>
                <a
                  href="https://acko-three.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/pankajbisht03/Acko-Frontend/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://ik.imagekit.io/itsVaibhav/plum_TH9xItBT_.png"
                  alt="plumgoodness-clone"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>plumgoodness-clone</h2>
              <p>
                Project with vanila js ,build using html css my first project on
                web dev
              </p>
              <div>
                <IoLogoJavascript />
                <FaReact />
                <SiNodedotjs />
                <SiExpress />
                <SiMongodb />
              </div>
              <div>
                <a
                  href="https://plumgoodness-clone-rohit-2021.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Abhishekkp42/E-commerce-Plumgoodness"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://ik.imagekit.io/itsVaibhav/Screenshot_2022-04-14_124052_DjcOD3STNo.png"
                  alt="croma"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Croma / NodeJs </h2>
              <p>
                First Backend Project with NodeJS, ExpressJS and MongoDB. Used
                EJS to render views. Main functionalities were : Register/Login
                using JWT
              </p>
              <div>
                <SiNodedotjs />
                <SiExpress />
                <SiMongodb />
              </div>
              <div>
                <a
                  href="https://cromaexpress.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    URL for the API
                  </span>
                </a>
                <a
                  href="https://github.com/Vaibhav-Solanki/cromaExpress"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
