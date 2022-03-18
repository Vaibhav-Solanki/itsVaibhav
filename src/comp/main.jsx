import Intro from "../main/intro";
import { Techstacks } from "../main/Techstacks";
// import About from "../main/About";
import TimeLine from "../main/TimeLine";
import Github from "../main/Github";
import Project from "../main/project";
import Contact from "../main/contact";
function Main() {
  return (
    <div className="container">
      <main>
        <Intro></Intro>
        {/* <About></About> */}
        <TimeLine></TimeLine>
        <Techstacks></Techstacks>
        <Project></Project>
        <Github></Github>
        <Contact></Contact>
      </main>
    </div>
  );
}

export default Main;
