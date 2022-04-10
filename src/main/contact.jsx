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
    e.target.className = `socDiv animated swing ${e.target.id}`;
    setTimeout(() => {
      e.target.className = "socDiv";
    }, 1000);
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
      const response = await fetch("/api", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(first),
      });
      const res = await response.json();
      if (res.status == 200 || res.status == 400) window.alert(res.message);
      else console.log(res.message);
    } catch (error) {
      console.log({ error: error });
    }
  };
  return (
    <div className="row" id="contact">
      <h2 style={{ fontSize: "3rem", fontFamily: "winMoji" }}>
        Get in touch 🤝
      </h2>
      <div className="col" id="colP">
        <div className="socialGrid">
          <div
            className="socDiv"
            onMouseEnter={handleHov}
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
            id="twitter"
            onClick={() =>
              window.open("https://twitter.com/VaibhavSolankies", "_blank")
            }
          >
            <FaTwitter />
          </div>
          <div
            className="socDiv"
            onMouseEnter={handleHov}
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
            id="fadev"
            onClick={() => window.open("https://dev.to/inco", "_blank")}
          >
            <FaDev />
          </div>
          <div
            className="socDiv"
            onMouseEnter={handleHov}
            id="phone"
            onClick={() => window.open("tel:+917000392596", "_blank")}
          >
            <FaPhoneAlt />
          </div>
          <div
            className="socDiv"
            onMouseEnter={handleHov}
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
        <div className="envelope front" />
        <div className="envelope back" />
      </div>
    </div>
  );
}

export default Contact;
