import "./TimeLine.scss";
import RubFont from "../custF/rubFont";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function TimeLine() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="container" data-aos="fade-up" data-aos-duration="1000">
      {/* <> */}
      <h2>
        <RubFont st="MY TIMELINE "></RubFont>
        {"💫"}
      </h2>
      <div className="timeline">
        <div
          className="timeline__event  timeline__event--type1"
          data-aos="fade-right"
        >
          <div className="timeline__event__icon ">
            <i className="fa-solid fa-code"></i>
          </div>
          <div className="timeline__event__date">Present</div>
          <div className="timeline__event__content ">
            <div className="timeline__event__title">
              Full Stack Web development (Masai)
            </div>
            <div className="timeline__event__description">
              <p>
                Joined the Military style Bootcamp to learn Software Development
                and Data Structures. Also learned many soft skills in the
                process.
              </p>
            </div>
          </div>
        </div>
        <div
          className="timeline__event timeline__event--type2"
          data-aos="fade-left"
        >
          <div className="timeline__event__icon">
            <i className="fa-solid fa-graduation-cap"></i>
          </div>
          <div className="timeline__event__date">2021</div>
          <div className="timeline__event__content">
            <div className="timeline__event__title">Diploma-CSE (R.G.P.V)</div>
            <div className="timeline__event__description">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
                nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam
                corporis incidunt reprehenderit accusantium id aut architecto
                harum quidem dolorem in!
              </p>
            </div>
          </div>
        </div>
        <div
          className="timeline__event timeline__event--type3"
          data-aos="fade-right"
        >
          <div className="timeline__event__icon">
            <i className="fa-solid fa-school"></i>
          </div>
          <div className="timeline__event__date">2018</div>
          <div className="timeline__event__content">
            <div className="timeline__event__title">
              Completed Higher Secondary (JNV)
            </div>
            <div className="timeline__event__description">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
                nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam
                corporis incidunt reprehenderit accusantium id aut architecto
                harum quidem dolorem in!
              </p>
            </div>
          </div>
        </div>
        <div
          className="timeline__event timeline__event--type1"
          data-aos="fade-left"
        >
          <div className="timeline__event__icon">
            <i className="fa-solid fa-cake-candles"></i>
          </div>
          <div className="timeline__event__date">20-09-2000</div>
          <div className="timeline__event__content">
            <div className="timeline__event__title">Birthday</div>
            <div className="timeline__event__description">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
                nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam
                corporis incidunt reprehenderit accusantium id aut architecto
                harum quidem dolorem in!
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* </> */}
    </div>
  );
}

export default TimeLine;
