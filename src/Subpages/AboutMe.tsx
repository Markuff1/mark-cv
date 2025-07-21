import Headshot from "./HeadshotV2.png";
import LocationIcon from "../Subpages/Logos/location.png";
import EmailIcon from "../Subpages/Logos/email.png";
import PhoneIcon from "../Subpages/Logos/phone.png";
import GithubIcon from "../Subpages/Logos/github.png";
import LinkedInIcon from "../Subpages/Logos/linkedin.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import "./AboutMe.scss";

function AboutMe() {
  return (
    <section id="about-me" className="about-me-container">
      <h1 className="about-me-title">-- ABOUT ME --</h1>

      <div className="about-me-content">
        <div className="headshot-wrapper">
          <LazyLoadImage
            alt="Headshot"
            src={Headshot}
            effect="blur"
            className="headshot"
          />
        </div>

        <div className="about-text">
          <h2>Hi, I’m Mark <span className="wavehand" role="img" aria-label="waving hand">👋</span></h2>
          <p>
          I currently work at Stalis as a Software Tester and Junior Web Developer, where I focus on manual functional and non-functional testing of sensitive NHS hospital data, ensuring secure and accurate data migration across systems.<br />

          In addition to testing, I contribute to the development of internal tools using React, with the goal of improving user experience and optimizing workflows.<br />

          Outside of work, I’ve built and deployed several independent full-stack React projects, incorporating best practices in testing, database integration, and user authentication.<br />

          I’m dedicated to continuous learning—exploring cybersecurity through TryHackMe, and expanding my technical skills through LinkedIn Learning courses in React, software testing, and secure development practices.<br />

          I’m passionate about building reliable, high-quality software solutions and growing my expertise in both development and security testing.
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