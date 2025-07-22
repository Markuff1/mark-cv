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
      dates: "Jan 2024 – Present",
      description: [
        "Led manual and automated testing initiatives for NHS healthcare software, ensuring data integrity across backend and UI layers.",
        "Collaborated with external security consultants to validate vulnerability fixes and strengthen application security posture.",
        "Contributed React components and UI fixes to internal healthcare portal, enhancing user experience and front-end maintainability.",
        "Utilized Microsoft SQL Server for backend validation and database-driven test case creation.",
        "Explored training in TypeScript and advanced development workflows to expand contributions beyond QA."
      ],
      skills: [
        "Manual Testing", "Automation Testing", "React", "SQL",
        "Microsoft SQL Server", "Data Integrity", "Functional Testing",
        "Security Testing", "Front-End Debugging"
      ]
    },
    {
      role: "Apprentice Software Tester at Stalis",
      dates: "Sept 2022 – Jan 2024",
      description: [
        "Executed full test lifecycle for data archiving solutions, including functional, accessibility, and performance testing.",
        "Designed SQL queries to verify NHS data integrity and troubleshoot ETL pipeline anomalies.",
        "Authored test plans and maintained traceability within Agile workflows, improving coverage and cross-team communication.",
        "Participated in backlog grooming and sprint demos to ensure test feedback influenced delivery."
      ],
      skills: [
        "Test Planning", "Agile", "SQL", "Accessibility Testing",
        "Functional Testing", "Data Validation", "Test Lifecycle"
      ]
    },
  ];

  const learningGoals = [
    {
      text: "Using TryHackMe to build foundational knowledge in penetration testing, Linux exploitation, and secure web application design. Completed hands-on labs with real-world scenarios to practice ethical hacking techniques.",
      skills: ["Penetration Testing", "Linux", "Cybersecurity", "Web Security"]
    },
    {
      text: "Completed LinkedIn Learning courses in React with TypeScript, Selenium-based automation testing, and SQL for test engineers—strengthening my ability to contribute to both front-end development and back-end quality assurance.",
      skills: ["React", "TypeScript", "Selenium", "SQL", "Automation"]
    }
  ];

  return (
    <section id="Experience" className="Experience-container">
      <h1 className="Experience-title">-- EXPERIENCE --</h1>

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
              <ul className="Experience-description-list">
                {description.map((point, idx) => (
                  <li key={idx} className="Experience-description-item">{point}</li>
                ))}
              </ul>
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
