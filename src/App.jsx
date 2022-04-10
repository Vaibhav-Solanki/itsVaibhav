import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./anim.css";
import "./App.css";
import Header from "./comp/Header";
import Footer from "./comp/Footer";
import Main from "./comp/main";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import meta from "./image/meta.png";
function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Helmet>
        <meta
          name="keywords"
          content="vaibhav,vaibhav solanki,masai,masai school"
        />
        {/* <!-- Primary Meta Tags --> */}
        <title>it's Vaibhav : Busy spinning the Web</title>
        <meta name="title" content="it's Vaibhav : Busy spinning the Web" />
        <meta
          name="description"
          content="Family 1st! but after that, Businessman- a dude that Loves people, from Ujjain, Madhya Pradesh.A Full Stack Developer who loves solving problems and building projects. I am equipped with a variety of technologies and tools to help me build the best possible product. I have completed my diploma in Computer science and Engineering from RGPV, Bhopal."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vaibhav-solanki.com/" />
        <meta
          property="og:title"
          content="it's Vaibhav : Busy spinning the Web"
        />
        <meta
          property="og:description"
          content="Family 1st! but after that, Businessman- a dude that Loves people, from Ujjain, Madhya Pradesh.A Full Stack Developer who loves solving problems and building projects. I am equipped with a variety of technologies and tools to help me build the best possible product. I have completed my diploma in Computer science and Engineering from RGPV, Bhopal."
        />
        <meta property="og:image" content={meta} />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://vaibhav-solanki.com/" />
        <meta
          property="twitter:title"
          content="it's Vaibhav : Busy spinning the Web"
        />
        <meta
          property="twitter:description"
          content="Family 1st! but after that, Businessman- a dude that Loves people, from Ujjain, Madhya Pradesh.A Full Stack Developer who loves solving problems and building projects. I am equipped with a variety of technologies and tools to help me build the best possible product. I have completed my diploma in Computer science and Engineering from RGPV, Bhopal."
        />
        <meta property="twitter:image" content={meta} />

        <meta name="robots" content="noindex, nofollow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Vaibhav Solanki" />

        <title>it's Vaibhav : Busy spinning the Web</title>
      </Helmet>
      <Header></Header>

      <Main></Main>

      <Footer></Footer>
    </>
  );
}

export default App;
