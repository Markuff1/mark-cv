import Headshot from "./HeadshotV2.png";
import "./AboutMe.scss";

function Header() {
  return (
    <section className="about-me-container">
      <h1 className="about-me-title">About Me</h1>

      <div className="about-me-content">
        <img src={Headshot} alt="Headshot" className="headshot" />
        <div className="about-text">
          <h2>Hi, I’m Mark</h2>
          <p>
            I currently work as a software tester, and I really enjoy digging into how things work and 
            making sure software does what it’s supposed to.<br /><br />
            
            I'm now starting to move into software development, learning more about coding and how to 
            build the things I usually test!<br /><br />
            
            I'm also getting into penetration testing and cyber security, which I'm finding super interesting.
            It’s all part of my goal to understand software from all angles — building it, breaking it (ethically!), 
            and helping make it better.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Header;
