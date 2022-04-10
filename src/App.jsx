import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./anim.css";
import "./App.css";
import Header from "./comp/Header";
import Footer from "./comp/Footer";
import Main from "./comp/main";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
