import hero from "../image/hero.png";
function About() {
  return (
    <div className="row flex-column-reverse flex-sm-row" id="about">
      <div className="py-md-5 col-12 col-sm-8">
        <h5 className="text-uppercase text-danger mb-3 letter-spacing-5">
          {" "}
          ABOUT ME
        </h5>
        <h2 className="m-0 mb-3 text-left">Vaibhav Solanki</h2>
        <p className="lead mb-4 pl-10">
          from Ujjain, Madhya Pradesh.A Full Stack Developer who loves solving
          problems and building projects. I am equipped with a variety of
          technologies and tools to help me build the best possible product. I
          have completed my diploma in Computer science and Engineering from
          RGPV, Bhopal.
        </p>
        <p>
          {" "}
          <a className="btn btn-outline-dark" href="category.html">
            My Resume
          </a>
        </p>
      </div>
      <div className="col col-sm-4">
        <img src={hero} alt="Profile" className="w-100 p-2 mb-2" />
      </div>
    </div>
  );
}

export default About;
