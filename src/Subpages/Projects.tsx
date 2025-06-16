import "./Projects.scss";
import { Link } from "react-router-dom";
import WWEWrestleverseImage from "../Subpages/ProjectImages/WWEWrestleverse.png";
import JavaGame from "../Subpages/ProjectImages/JavaGame.png"
import HarryBDayPage from "../Subpages/ProjectImages/BirthdayWebsite.png"
import CVWebsite from "../Subpages/ProjectImages/CVWebsite.png"

function Projects() {
  const projectList = [
    {
      title: "WWE Universe Tracker",
      description:
        "A full-stack web app built to manage and track elements of WWE Universe Mode including Champions, Rosters, Shows, and Storylines. Combined my passion for WWE with coding to improve both front-end and back-end development skills.",
      bullets: [
        "Developed using React, TypeScript, SCSS, and JavaScript for a responsive UI",
        "Used Firebase and PHP for secure user authentication and data storage",
        "Implemented features like title histories, roster management, and weekly show tracking",
        "Built a login verification system to manage user access",
        "Gained experience in full-stack development and real-time database interactions",
        "Built Protected Routes so that users can't bypass the login page",
        "Started Building an AI ChatBot and I am currently training that AI chatbot so that It can answer questions about my Website for new users"
      ],
      tech: ["React", "TypeScript", "Firebase", "PHP", "SCSS", "JavaScript", "VSCode"],
      image: WWEWrestleverseImage,
      link: "/projects/wwe-universe-tracker",
      repo: "https://github.com/yourusername/wwe-universe-tracker",
      site: "https://wweuniverse.app",
    },
    {
      title: "2D Adventure Game",
      description:
        "A pixel-style 2D game where players explore an open world, collect keys and treasures, and unlock new zones. Created to deepen my understanding of game logic and canvas rendering.",
      bullets: [
        "Built using Java and the eclipse IDE",
        "Designed a tile-based world system with collision detection",
        "Implemented item collection, key/chest interactions, and player health mechanics",
        "Built up on my knowledge of OOP (Object Orientated Programming)",
        "Added Map creation based on a .txt file",
        "Create a feature where to reduce lag, only the map in the User POV is generated and it the rest of the map generates as the player moves"

      ],
      tech: ["Java","OOP","Eclipse IDE"],
      image: JavaGame,
      link: "/projects/2d-adventure-game",
      repo: "",
      site: "",
    },
    {
      title: "Happy Birthday Quiz Website",
      description:
        "An Informal but interactive birthday-themed quiz site with FormSpree integration to get Form input results. Designed for a personalized user experience and built as a fun front-end project.",
      bullets: [
        "Used React and TypeScript for a dynamic quiz UI",
        "Integrated an email API to send results or greetings",
        "Focused on responsive design and user experience",
      ],
      tech: ["React", "TypeScript", "FormSpree", "SCSS"],
      image: HarryBDayPage,
      link: "/projects/birthday-quiz",
      repo: "",
      site: "",
    },
    {
      title: "CV Portfolio Website",
      description:
        "The very website you're viewing now – built to showcase my projects, experience, and technical capabilities in a professional portfolio format.",
      bullets: [
        "Built using React, TypeScript, and SCSS",
        "Mobile-responsive with animated transitions and routing",
        "Showcases real projects, training, and technical background",
        "Integrated a CV Download button use the PDF file",
      ],
      tech: ["React", "TypeScript", "SCSS", "Vite","File Download"],
      image: CVWebsite,
      link: "",
      repo: "https://github.com/yourusername/cv-portfolio",
      site: "https://markuff1.github.io/mark-cv/",
    },
    {
      title: "Image Resizer Tool",
      description:
        "A web-based utility to resize large image files before uploading. Solved a real-world problem I encountered while working on other projects.",
      bullets: [
        "Used HTML Canvas API to resize and compress images",
        "Built with vanilla JavaScript and drag-and-drop functionality",
        "Improved upload speed and compatibility for large images",
      ],
      tech: ["JavaScript", "HTML5", "Canvas", "File Handling"],
      image: "/images/image-resizer.png",
      link: "/projects/image-resizer",
      repo: "https://github.com/yourusername/image-resizer",
      site: "",
    },
    {
      title: "Daily To-Do App",
      description:
        "A simple yet highly used personal productivity app. Helps me track tasks, set priorities, and manage my time effectively every day.",
      bullets: [
        "Built with React and Local Storage for persistent state",
        "Features task sorting, completion status, and filtering",
        "Clean UI and responsive layout for mobile use",
      ],
      tech: ["React", "JavaScript", "LocalStorage", "CSS"],
      image: "/images/todo-app.png",
      link: "/projects/todo-app",
      repo: "https://github.com/yourusername/todo-app",
      site: "https://todo-app-live.netlify.app",
    },
    {
      title: "Chess App with AI",
      description:
        "An interactive chess game where players can compete against an AI opponent. Focused on move validation, AI logic, and clean game UI.",
      bullets: [
        "Implemented AI using Minimax algorithm with depth limiting",
        "Built with React for component-based board rendering",
        "Added legal move logic, checkmate detection, and undo feature",
      ],
      tech: ["React", "JavaScript", "Chess.js", "Minimax"],
      image: "/images/chess-app.png",
      link: "/projects/chess-app",
      repo: "",
      site: "",
    },
  ];

  return (
    <section id="Projects" className="Projects-container">
      <h1 className="Projects-title">Projects</h1>
      <div className="Projects-content">
        {projectList.map((project, index) => (
          <div key={index} className="Project-card">
            <img
              src={project.image}
              alt={project.title}
              className="Project-image"
            />
            <div className="Project-details">
              <h2 className="Project-name">{project.title}</h2>
              <p className="Project-description">{project.description}</p>
              <ul className="Project-bullets">
                {project.bullets.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="Project-tags">
                {project.tech.map((tag, i) => (
                  <span key={i} className="Project-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="Project-links">
                <Link to={project.link} className="Project-button">
                  View Project
                </Link>
                {project.repo ? (
                  <a
                    href={project.repo}
                    className="Project-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Repo
                  </a>
                ) : (
                  <span className="Project-disabled">GitHub: Not Available</span>
                )}
                {project.site ? (
                  <a
                    href={project.site}
                    className="Project-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Website
                  </a>
                ) : (
                  <span className="Project-disabled">Live Site: Not Available</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;