import "./intro.css";
import RubFont from "../custF/rubFont";
function Intro() {
  return (
    <div className="container intro" id="home">
      <div>
        <h1 id="inName" className="titH1">
          <RubFont st="Hi,"></RubFont>
          <br />
          <RubFont st="I’m Vaibhav"></RubFont>
          <br />
          <RubFont st="Web Developer"></RubFont>
        </h1>
        <span className="wave" style={{ fontFamily: "winMoji" }}>
          👋
        </span>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Intro;
