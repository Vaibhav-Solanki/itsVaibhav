import "aos/dist/aos.css";
import "./anim.css";
import Header from "./comp/Header";
import Footer from "./comp/Footer";
import Main from "./comp/main";
import Aos from "aos";
import "./App.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
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
