import { lazy, Suspense } from "react";
const Intro = lazy(() => import("../main/intro"));
const About = lazy(() => import("../main/About"));
const TimeLine = lazy(() => import("../main/TimeLine"));
const Techstacks = lazy(() => import("../main/Techstacks"));
const Project = lazy(() => import("../main/project"));
const Github = lazy(() => import("../main/Github"));
const Contact = lazy(() => import("../main/contact"));
const renderLoader = () => (
  <div className="main-item">
    <div className="static-background">
      <div className="background-masker btn-divide-left"></div>
    </div>
    <div className="animated-background">
      <div className="background-masker btn-divide-left"></div>
    </div>
  </div>
);
function Main() {
  return (
    <Suspense fallback={renderLoader()}>
      <Intro></Intro>
      <About></About>
      <TimeLine></TimeLine>
      <Techstacks></Techstacks>
      <Github></Github>
      <Project></Project>
      <Contact></Contact>
    </Suspense>
  );
}

export default Main;
