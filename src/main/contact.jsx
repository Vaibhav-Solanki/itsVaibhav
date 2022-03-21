import "./contact.css";
function Contact() {
  return (
    <div className="row" id="contact">
      <h2 style={{ fontSize: "3rem", fontFamily: "Dancing Script" }}>
        Get in touch 🤝
      </h2>
      <div className="col" id="colP">
        <div class="socialGrid">
          <div
            className="socDiv"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/vaibhav-s-solanki/",
                "_blank"
              )
            }
          >
            <i class="fa-brands fa-linkedin-in"></i>
          </div>
          <div
            className="socDiv"
            onClick={() =>
              window.open("https://github.com/Vaibhav-Solanki", "_blank")
            }
          >
            <i class="fa-brands fa-github"></i>
          </div>
          <div
            className="socDiv"
            onClick={() =>
              window.open("mailto:vaibhavsolankie@gmail.com", "_blank")
            }
          >
            <i class="fa-solid fa-envelope"></i>
          </div>
          <div
            className="socDiv"
            onClick={() =>
              window.open("https://www.instagram.com/inco.solanki/", "_blank")
            }
          >
            <i class="fa-brands fa-instagram"></i>
          </div>
          <div
            className="socDiv"
            onClick={() =>
              window.open("https://twitter.com/VaibhavSolankies", "_blank")
            }
          >
            <i class="fa-brands fa-twitter"></i>
          </div>
          <div
            className="socDiv"
            onClick={() =>
              window.open("https://www.hackerrank.com/vaibhavsolanki", "_blank")
            }
          >
            <i class="fa-brands fa-hackerrank"></i>
          </div>
          <div
            className="socDiv"
            onClick={() => window.open("https://dev.to/inco", "_blank")}
          >
            <i class="fa-brands fa-dev"></i>
          </div>
          <div
            className="socDiv"
            onClick={() => window.open("tel:+917000392596", "_blank")}
          >
            <i class="fa-solid fa-phone"></i>
          </div>
          <div
            className="socDiv"
            onClick={() => window.open("https://wa.me/7000392596", "_blank")}
          >
            <i class="fa-brands fa-whatsapp"></i>
          </div>
        </div>
      </div>
      <div className="wrapper centered col">
        <article className="letter">
          <div className="side">
            <h1>Contact Me</h1>
            <p>
              <textarea placeholder="Your message" defaultValue={""} />
            </p>
          </div>
          <div className="side">
            <p>
              <input type="text" placeholder="Your name" />
            </p>
            <p>
              <input type="email" placeholder="Your email" />
            </p>
            <p>
              <button id="sendLetter">Send</button>
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
