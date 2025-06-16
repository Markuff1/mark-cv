import Headshot from "./HeadshotV2.png";
import LocationIcon from "../Subpages/Logos/location.png";
import EmailIcon from "../Subpages/Logos/email.png";
import PhoneIcon from "../Subpages/Logos/phone.png";
import GithubIcon from "../Subpages/Logos/github.png";
import LinkedInIcon from "../Subpages/Logos/linkedin.png";

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
            I currently work at Stalis as a Software Tester and Junior Web Developer, focusing on manual functional and non-functional testing of sensitive NHS hospital data to ensure secure and accurate transfer between databases and our service.<br /><br />

            Alongside testing, I actively contribute to improving internal systems using React, aiming to enhance user experience and streamline workflows.<br /><br />

            I’ve also completed several independent React projects, applying thorough testing practices to ensure quality and reliability.<br /><br />

            I’m committed to continuous learning, having explored penetration testing through platforms like TryHackMe, and completed LinkedIn courses on React and testing methodologies.<br /><br />

            I am passionate about delivering high-quality software solutions and growing my expertise in both development and security testing.
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
            <div className="contact-itemv2">
              <a href="https://github.com/Markuff1">
                <img src={GithubIcon} alt="GitHub" />
              </a>
              <a href="https://www.linkedin.com/in/mark-nixon-325b84239/">
                <img src={LinkedInIcon} alt="LinkedIn" />
              </a>
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