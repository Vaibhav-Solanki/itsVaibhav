import Intro from "../main/intro";
// import About from "../main/About";
import TimeLine from "../main/TimeLine";
function Main() {
  return (
    <div className="container">
      <main>
        <Intro></Intro>
        {/* <About></About> */}
        <TimeLine></TimeLine>
      </main>
    </div>
  );
}

export default Main;
