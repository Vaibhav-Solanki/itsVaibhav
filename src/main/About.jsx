import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./About.css";
function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      className="container circle-slider-bg"
      style={{
        background:
          "right bottom url(https://d19m59y37dris4.cloudfront.net/sell/2-0/img/slider/circle-slider-3.jpg) no-repeat",
      }}
    >
      <div className="w-100">
        <div className="row py-5">
          <div className="col-lg-8 py-md-5 py-lg-7 overlay-content">
            <h5 className="text-uppercase text-danger mb-3 letter-spacing-5">
              {" "}
              Special
            </h5>
            <h2 className="m-0 mb-3 text-left">Ethnic blouses</h2>
            <p className="lead mb-4">
              Lorem ipsum dolor sit amet.
              <br />
              Consectetur adipisicing elit.
            </p>
            <p>
              {" "}
              <a className="btn btn-outline-dark" href="category.html">
                View collection
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
