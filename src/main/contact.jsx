import "./contact.css";
import { useState } from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaHackerrank,
  FaDev,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
function Contact() {
  function handleHov(e) {
    e.target.className = `skillDiv animated swing ${e.target.id}`;
  }
  function handleExit(e) {
    setTimeout(() => {
      e.target.className = "skillDiv";
    }, 500);
  }
  let tmp = {};
  const [first, setfirst] = useState(tmp);
  const hanIn = (e) => {
    let { name, value } = e.target;
    tmp[name] = value;
    setfirst(tmp);
    console.log(first);
  };
  const postMes = async () => {
    try {
      const response = await fetch("https://noman.co.in/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(first),
      });
      const res = await response.json();
      if (response.status == 200) window.alert(res.message);
      else window.alert("please corect your message");
    } catch (error) {
      console.log({ error: error });
    }
  };
  return (
    <div className="row" id="contact" data-aos="fade-right">
      <h2 className="titleH2Tag">Get in touch 🤝</h2>
      <div className="col" id="colP">
        <div className="socialGrid">
          <div
            className="socDiv"
            onMouseEnter={handleHov}
            onMouseLeave={handleExit}
            id="linkedin"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/vaibhav-s-solanki/",
                "_blank"
              )
            }
          >
            <FaLinkedinIn />
          </div>
          <div
            className="socDiv"
            onMouseEnter={handleHov}
            onMouseLeave={handleExit}
            id="github"
            onClick={() =>
              window.open("https://github.com/Vaibhav-Solanki", "_blank")
            }
          >
            <FaGithub />
          </div>
          <div
            className="socDiv"
            onMouseEnter={handleHov}
            onMouseLeave={handleExit}
            id="mail"
            onClick={() =>
              window.open("mailto:vaibhavsolankie@gmail.com", "_blank")
            }
          >
            <FaEnvelope />
          </div>
          <div
            className="socDiv"
            onMouseEnter={handleHov}
            onMouseLeave={handleExit}
            id="insta"
            onClick={() =>
              window.open("https://www.instagram.com/inco.solanki/", "_blank")
            }
          >
            <FaInstagram />
          </div>
          <div
            className="socDiv"
            onMouseEnter={handleHov}
            onMouseLeave={handleExit}
            id="twitter"
            onClick={() =>
              window.open("https://twitter.com/incoSolanki", "_blank")
            }
          >
            <FaTwitter />
          </div>
          <div
            className="socDiv"
            onMouseEnter={handleHov}
            onMouseLeave={handleExit}
            id="hrank"
            onClick={() =>
              window.open("https://www.hackerrank.com/vaibhavsolanki", "_blank")
            }
          >
            <FaHackerrank />
          </div>
          <div
            className="socDiv"
            onMouseEnter={handleHov}
            onMouseLeave={handleExit}
            id="fadev"
            onClick={() => window.open("https://dev.to/inco", "_blank")}
          >
            <FaDev />
          </div>
          <div
            className="socDiv"
            onMouseEnter={handleHov}
            onMouseLeave={handleExit}
            id="phone"
            onClick={() => window.open("tel:+917000392596", "_blank")}
          >
            <FaPhoneAlt />
          </div>
          <div
            className="socDiv"
            onMouseEnter={handleHov}
            onMouseLeave={handleExit}
            id="whatsapp"
            onClick={() => window.open("https://wa.me/7000392596", "_blank")}
          >
            <FaWhatsapp />
          </div>
        </div>
      </div>
      <div className="wrapper centered col">
        <article className="letter">
          <div className="side">
            <h1>Contact Me</h1>
            <p>
              <textarea
                placeholder="Your message"
                defaultValue={""}
                name="message"
                onChange={hanIn}
              />
            </p>
          </div>
          <div className="side">
            <p>
              <input
                type="text"
                placeholder="Your name"
                name="name"
                onChange={hanIn}
              />
            </p>
            <p>
              <input
                type="email"
                placeholder="Your email"
                name="email"
                onChange={hanIn}
              />
            </p>
            <p>
              <button id="sendLetter" onClick={postMes}>
                Send
              </button>
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Contact;
