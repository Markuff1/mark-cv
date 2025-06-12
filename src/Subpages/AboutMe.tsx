import Headshot from "./HeadshotV2.png";
import LocationIcon from "../Subpages/Logos/location.png";
import EmailIcon from "../Subpages/Logos/email.png";
import PhoneIcon from "../Subpages/Logos/phone.png";

import "./AboutMe.scss";

function AboutMe() {
  return (
    <section id="about-me" className="about-me-container">
      <h1 className="about-me-title">About Me</h1>

      <div className="about-me-content">
        <img src={Headshot} alt="Headshot" className="headshot" />
        <div className="about-text">
          <h2>Hi, I’m Mark</h2>
          <p>
            I currently work as a software tester, and I really enjoy digging into how things work and 
            making sure software does what it’s supposed to.<br />
            
            I'm now starting to move into software development, learning more about coding and how to 
            build the things I usually test!<br />
            
            I'm also getting into penetration testing and cyber security, which I'm finding super interesting.
            It’s all part of my goal to understand software from all angles — building it, breaking it (ethically!), 
            and helping make it better.
          </p>

          {/* Contact Details */}
          <div className="contact-info">
            <div className="contact-item">
              <img src={LocationIcon} alt="Location" />
              <span>Stockport, UK</span>
            </div>
            <div className="contact-item">
              <img src={EmailIcon} alt="Email" />
              <span>Mark.Nixon2604@gmail.com</span>
            </div>
            <div className="contact-item">
              <img src={PhoneIcon} alt="Phone" />
              <span>+44 7305 394465</span>
            </div>
              <a href="/mark-cv/MarksCV.pdf" download className="CVButton">
                Download CV
              </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutMe;