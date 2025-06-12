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
      role: "Mid-Level Software Tester + Junior Software Developer at Stalis",
      dates: "Jan 2024 to Present",
      description:
        "After finishing my apprenticeship, I have continued to expand my manual and automation testing expertise, while further developing my SQL skills for backend testing and data analysis. I’ve recently started contributing to front-end development on a React-based project, applying my self-taught knowledge of React in a formal environment. This has also given me valuable experience working with Microsoft SQL databases and understanding how front-end and back-end systems interact in a professional healthcare setting.",
      skills: ["React", "SQL", "Manual Testing", "Automation Testing", "Data Analysis", "Microsoft SQL Server"]
    },
    {
      role: "Apprentice/Junior Software Tester at Stalis",
      dates: "Sept 2022 to Jan 2024",
      description:
        "During my apprenticeship, I gained practical experience in functional and non-functional testing, the software testing lifecycle, Agile methodologies, automation, and accessibility testing. I played a key role in a data archiving project for NHS Trusts, where I independently created test plans, developed and executed test suites, and managed the overall test process. I also worked on verifying NHS database integrity, which strengthened my SQL skills and deepened my understanding of relational databases and data validation.",
      skills: ["SQL", "Agile", "Accessibility Testing", "Functional Testing", "Test Planning"]
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
