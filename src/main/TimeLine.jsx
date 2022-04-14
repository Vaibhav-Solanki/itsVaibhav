import { useState, useEffect } from "react";
import "./Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaStar, FaGraduationCap } from "react-icons/fa";
// import { ThemeContext } from "../../Context/theme";

export const Timeline = () => {
  // const [{ themename }] = React.useContext(ThemeContext);
  const [linecolor, setlinecolor] = useState("#23283e");
  // themename === "light" ? "#23283e" : "#fcfcfc"

  useEffect(() => {
    // if (themename === "dark") {
    if (false) {
      setlinecolor("#fcfcfc");
    } else {
      setlinecolor("#23283e");
    }
  }, []);
  // }, [themename]);
  return (
    <>
      <div className="section mainsection">
        <h2 className="titleH2Tag" data-aos="fade-right">
          My Timeline 🏅
        </h2>
        <VerticalTimeline lineColor={linecolor}>
          <VerticalTimelineElement
            date={"October 2021 - April 2022 - "}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<FaGraduationCap />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Student
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Masai School (Remote)
            </h4>
            <p data-aos="fade-right">
              Joined the Military style Bootcamp to learn Software Development
              and Data Structures. Also learned many soft skills in the process.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"2019-2022"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<FaGraduationCap />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              DIPLOMA-CSE
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            ></h4>
            <p data-aos="fade-right">
              Rajiv Gandhi Proudyogiki Vishwavidyalaya,Bhopal
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"March 2018"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<FaGraduationCap />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Completed Higher Secondary - Science
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            ></h4>
            <p data-aos="fade-right">Jawahar Navodaya Vidyalaya Ujjian</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            icon={<FaStar />}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
          ></VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};
export default Timeline;
