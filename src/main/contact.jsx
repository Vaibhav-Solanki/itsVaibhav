import "./contact.css";
function Contact() {
  return (
    <div className="row">
      <div className="col">test</div>
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
