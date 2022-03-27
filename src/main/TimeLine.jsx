import "./TimeLine.scss";
import RubFont from "../custF/rubFont";
let list = [
  {
    Icon: "💻",
    time: "Present",
    title: "Full Stack Web development (Masai)",
    detail:
      "Joined the Military style Bootcamp to learn Software Development and Data Structures. Also learned many soft skills in the process.",
  },
  {
    Icon: "🎓",
    time: "2021",
    title: "Diploma-CSE (R.G.P.V)",
    detail: "Also learned many soft skills in the process.",
  },
  {
    Icon: "🎒",
    time: "2018",
    title: "Completed Higher Secondary (JNV)",
    detail: "Also learned many soft skills in the process.",
  },
];
function TimeCard({ list }) {
  let i = 1;
  return list.map(({ Icon, time, title, detail }, key) => {
    if (i > 3) i = 1;
    let cl = `timeline__event  timeline__event--type${i++}`;
    return (
      <div
        className={cl}
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        key={key}
      >
        <div
          className="timeline__event__icon "
          style={{ fontSize: "2rem", fontFamily: "winMoji" }}
        >
          {Icon}
        </div>
        <div className="timeline__event__date">{time}</div>
        <div className="timeline__event__content ">
          <div className="timeline__event__title">{title}</div>
          <div className="timeline__event__description">
            <p>{detail}</p>
          </div>
        </div>
      </div>
    );
  });
}
function TimeLine() {
  return (
    <div className="container" id="time">
      {/* <> */}
      <h2 data-aos="fade-up" data-aos-anchor-placement="top-center">
        <RubFont st="MY TIMELINE "></RubFont>
        {"💫"}
      </h2>
      <div className="timeline">
        <TimeCard list={list}></TimeCard>
      </div>
      {/* </> */}
    </div>
  );
}

export default TimeLine;
