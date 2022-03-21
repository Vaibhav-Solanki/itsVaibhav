import "./project.scss";
import croma from "../image/croma.jpg";
import plum from "../image/plum.jpg";
let list = [
  {
    Img: croma,
    time: " feb 2022",
    title: "croma clone",
    detail:
      "Croma is an Indian electronics retail chain with an online store as well \nFeatures:\n1. Add to Cart and Edit Cart Items feature\n2. Apply Promo Code feature on Cart page\n3. Multiple delivery options with estimated time \n Tech Stack: HTML | CSS | Javascript | React | Node |\nMongoDB",
    git: "https://github.com/Vaibhav-Solanki/cromaExpress",
    link: "https://cromaexpress.herokuapp.com/",
    Blog: "#",
  },
  {
    Img: plum,
    time: " Dec 2021",
    title: "Plumgoodness",
    detail:
      "An e-commerce web application providing a wide range of skincare products.Features:-> Social Sign-in/Sign-up-> Cart and Payment Functionality->Detailed Product pagesTech Stack: HTML | CSS | JavaScript",
    git: "https://github.com/Abhishekkp42/E-commerce-Plumgoodness",
    link: "https://plumgoodness-clone-rohit-2021.netlify.app/",
    Blog: "#",
  },
];
function ProjectCard({ list }) {
  let color = ["red", "green", "blue", "yellow"];
  let i = 0;
  return list.map(({ Img, time, title, detail, git, link, Blog }, key) => {
    if (i > 3) i = 0;
    return (
      <article
        className={`postcard light-mod ${color[i]}`}
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        key={key}
      >
        <a className="postcard__img_link" href="#">
          <img className="postcard__img" src={Img} alt="Image Title" />
        </a>
        <div className="postcard__text t-dark">
          <h1 className={`postcard__title ${color[i++]}`}>{title}</h1>
          <div className="postcard__subtitle small">
            <time dateTime="2020-05-25 12:00:00">
              <i className="fas fa-calendar-alt mr-2" />
              {time}
            </time>
          </div>
          <div className="postcard__bar" />
          <div className="postcard__preview-txt">{detail}</div>
          <ul className="postcard__tagbox">
            <li className="tag__item">
              <i className="fa-brands fa-node-js"></i> nodeJs
            </li>
            <li className="tag__item">
              <i className="fa-brands fa-js-square"></i> Javascript
            </li>
            <li className="tag__item">
              <i className="fa-solid fa-database"></i> mongoDB
            </li>
          </ul>
          <div className="btn-group" role="group" aria-label="Basic example">
            {/* <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => window.open(Blog, "_blank")}
            >
              Blog
            </button> */}
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => window.open(git, "_blank")}
            >
              Github
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => window.open(link, "_blank")}
            >
              Link
            </button>
          </div>
        </div>
      </article>
    );
  });
}
function project() {
  return (
    <div>
      <section className="light-mod" id="project">
        <div className="container py-2">
          <div
            className="h1 text-center text-dark"
            id="pageHeaderTitle"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            My PROJECTS
          </div>
          <ProjectCard list={list}></ProjectCard>
        </div>
      </section>
    </div>
  );
}

export default project;
