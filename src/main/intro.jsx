import "./intro.css";
import RubFont from "../custF/rubFont";
function Intro() {
  return (
    <div className="container intro">
      <div>
        <h1 id="inName" className="titH1">
          <RubFont st="Hi,"></RubFont>
          <br />
          <RubFont st="I'm Vaibhav"></RubFont>
          <br />
          <RubFont st="Web Developer"></RubFont>
        </h1>
        <span className="wave">👋</span>
        <div
          className="btn-group my-0"
          role="group"
          aria-label="Basic example"
          id="callBtn"
        >
          <button type="button" className="btn btn-primary">
            Skills
          </button>
          <button type="button" className="btn btn-primary">
            Resume
          </button>
          <button type="button" className="btn btn-primary">
            Work
          </button>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Intro;
