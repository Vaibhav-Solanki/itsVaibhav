import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./anim.css";
import "./App.css";
import Navbar from "./comp/navbar";
import Footer from "./comp/Footer";
import Main from "./comp/main";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
