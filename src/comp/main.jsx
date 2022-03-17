import Intro from "../main/intro";
import { Techstacks } from "../main/Techstacks";
// import About from "../main/About";
import TimeLine from "../main/TimeLine";
import Github from "../main/Github";
function Main() {
  return (
    <div className="container">
      <main>
        <Intro></Intro>
        {/* <About></About> */}
        <TimeLine></TimeLine>
        <Techstacks></Techstacks>
        <Github></Github>
      </main>
    </div>
  );
}

export default Main;
