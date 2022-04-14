import Intro from "../main/intro";
import About from "../main/About";
import TimeLine from "../main/TimeLine";
import Techstacks from "../main/Techstacks";
import Project from "../main/project";
import Github from "../main/Github";
import Contact from "../main/contact";
function Main() {
  return (
    <main className="container">
      <Intro></Intro>
      <About></About>
      <TimeLine></TimeLine>
      <Techstacks></Techstacks>
      <Github></Github>
      <Project></Project>
      <Contact></Contact>
    </main>
  );
}

export default Main;
