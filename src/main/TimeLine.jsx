import "./TimeLine.css";
import RubFont from "../custF/rubFont";
import hero from "../image/hero.png";
function TimeLine() {
  return (
    <div className="container">
      {/* <> */}
      <h2>
        <RubFont st="MY TIMELINE "></RubFont>
        {"💫"}
      </h2>
      <div className="timeline">
        <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
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
        <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
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
        <div className="timeline__event animated fadeInUp delay-1s timeline__event--type3">
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
        <div className="timeline__event animated fadeInUp timeline__event--type1">
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
