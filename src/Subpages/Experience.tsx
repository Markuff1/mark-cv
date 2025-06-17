import "./Experience.scss";

// Import logos
import HtmlLogo from "../Subpages/Logos/html5.png";
import CssLogo from "../Subpages/Logos/css.png";
import JsLogo from "../Subpages/Logos/javascript.png";
import PythonLogo from "../Subpages/Logos/python.png";
import ReactLogo from "../Subpages/Logos/react.png";
import TsLogo from "../Subpages/Logos/tsnode.png";
import SqlLogo from "../Subpages/Logos/mysql.png";
import PhpLogo from "../Subpages/Logos/php.png";
import firebaseLogo from "../Subpages/Logos/firebase.png";

function Experience() {
  const logos = [
    { src: HtmlLogo, alt: "HTML" },
    { src: CssLogo, alt: "CSS" },
    { src: JsLogo, alt: "JavaScript" },
    { src: PythonLogo, alt: "Python" },
    { src: ReactLogo, alt: "React" },
    { src: TsLogo, alt: "TypeScript" },
    { src: SqlLogo, alt: "SQL" },
    { src: PhpLogo, alt: "PHP" },
    { src: firebaseLogo, alt: "Firebase" },
  ];

  const careerHistory = [
    {
    role: "Software Tester & Junior Web Developer at Stalis",
    dates: "Jan 2024 to Present",
    description:
      "After completing my apprenticeship, I transitioned into a Junior Software Tester role and later progressed to a Mid-Level Software Tester. My responsibilities included functional testing on databases, data, and systems to ensure data integrity and application reliability. I began supporting penetration testing efforts by retesting and validating security fixes provided by an external security provider. Additionally, I started contributing to our frontend React application, handling small UI and functionality fixes. I am currently exploring training opportunities to take on more advanced development tasks alongside my testing responsibilities.",
    skills: ["Manual Testing", "Automation Testing", "React", "SQL", "Microsoft SQL Server", "Data Integrity", "Functional Testing", "Non-Functional Testing", "Security Testing Support"]
   },
    {
      role: "Apprentice Software Tester at Stalis",
      dates: "Sept 2022 to Jan 2024",
      description:
        "As an apprentice, I developed hands-on experience across the full software testing lifecycle, including functional, non-functional, and accessibility testing. I was responsible for test planning, execution, and reporting within Agile workflows. A key part of my role was supporting NHS data archiving projects—designing test suites, validating data integrity, and troubleshooting SQL queries to ensure reliable and compliant data handling.",
      skills: ["Test Planning", "Agile", "SQL", "Accessibility Testing", "Functional Testing", "Data Validation", "Test Lifecycle"]
    },
  ];


  const learningGoals = [
    {
      text: "TryHackMe - Using the Website TryHackMe to learn more about Penetrantion testing and Cybersecurity - It has been used to not only gain the knowledge of the different pen testing techniques but also to gain some practical experience by using the Lynux IDE that they provide and complete some of the testing. Some examples of the training I've done, are in the projects below",
      skills: ["Penetration Testing","Lynux","CyberSecurity"]
    },
    {
      text: "LinkedIn Training - I've also been doing a few LinkedIn Courses as well in my spare time to do with React.ts Web Development, Automation Testing to do with Selenium as well as some general Software Testing learning to do with SQL. Some examples of the training I've done, are in the projects below ",
      skills: ["React", "Typescript", "Selenium", "Manual Testing"]
    }
  ];

  return (
    <section id="Experience" className="Experience-container">
      <h1 className="Experience-title">Experience</h1>

      {/* Logos Section */}
      <div className="Experience-content logos">
        {logos.map(({ src, alt }) => (
          <div key={alt} className="logo-wrapper" title={alt}>
            <img src={src} alt={alt} />
            <span className="logo-label">{alt}</span>
          </div>
        ))}
      </div>

      {/* Career Section */}
      <div className="Experience-section">
        <h2 className="Experience-title2">Career</h2>
        <div className="Experience-text">
          {careerHistory.map(({ role, dates, description, skills }) => (
            <div key={role} className="Experience-entry">
              <p className="Experience-role">{role}</p>
              <p className="Experience-dates">{dates}</p>
              <p className="Experience-description">{description}</p>
              <div className="Experience-skills">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Independent Learning Section */}
      <div className="Experience-section">
        <h2 className="Experience-title2">Independent Training</h2>
        <div className="Experience-text">
          {learningGoals.map(({ text, skills }, index) => (
            <div key={index} className="Experience-entry">
              <p className="Experience-description">{text}</p>
              <div className="Experience-skills">
                {skills.map((skill, idx) => (
                  <span key={idx} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
