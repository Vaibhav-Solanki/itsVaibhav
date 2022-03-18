import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./contact.css";
function Contact() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="container">
      <div className="social-btns">
        <a className="btn facebook" href="#">
          <i className="fa fa-facebook"></i>
        </a>
        <a className="btn twitter" href="#">
          <i className="fa fa-twitter"></i>
        </a>
        <a className="btn google" href="#">
          <i className="fa fa-google"></i>
        </a>
        <a className="btn dribbble" href="#">
          <i className="fa fa-dribbble"></i>
        </a>
        <a className="btn skype" href="#">
          <i className="fa fa-skype"></i>
        </a>
      </div>
    </div>
  );
}

export default Contact;
