import "./Projects.scss";
import WWEWrestleverseV3Image from "../Subpages/ProjectImages/WWEWrestleverse.png";
import WWEWrestleverseV2Image from "../Subpages/ProjectImages/WWEWrestleverseHTML.png";
import JavaGame from "../Subpages/ProjectImages/JavaGame.png"
import HarryBDayPage from "../Subpages/ProjectImages/BirthdayWebsite.png"
import CVWebsite from "../Subpages/ProjectImages/CVWebsite.png"
import ImageResizer from "../Subpages/ProjectImages/ImageResizer.png"
import ChessGame from "../Subpages/ProjectImages/ChessGame.png"
import MyRunnerV1 from "../Subpages/ProjectImages/MyRunner.png"

function Projects() {
 const projectList = [
  {
    title: "MyRunner App",
    description:
      "A performance-optimized running tracker that integrates with the Strava API to visualize personal fitness data. The app displays recent activities (pace, distance, time, route) using dynamic charts and maps, supports goal tracking (weekly distance/time), and includes a configurable settings panel for units and target thresholds. Designed with modular architecture using React, TypeScript, Firebase, and PHP, with built-in performance enhancements like lazy loading and data export functionality.",
    bullets: [
      "Fetched authenticated activity data from Strava’s API and transformed it into structured datasets using TypeScript",
      "Rendered interactive route maps using GeoJSON + Leaflet, allowing zoom and pan for GPS-accurate activity paths",
      "Visualized pace progression with real-time line graphs using Chart.js and React state management",
      "Implemented client-side CSV export to download the last 50 activities using JavaScript Blob APIs",
      "Added ‘Load More’ pagination to minimize initial render time and improve UX for users with long activity histories",
      "Created a settings dashboard for users to switch between kilometers/miles and adjust weekly goal thresholds",
      "Used Firebase Authentication to securely manage user sessions and sync personalized settings",
      "Structured components for modular scalability using React hooks, context, and custom utility functions"
    ],
    tech: ["React", "TypeScript", "Firebase", "PHP", "SCSS", "JavaScript", "Chart.js", "Leaflet", "Blob API", "VSCode"],
    image: MyRunnerV1,
    link: "/projects/MyRunner",
    repo: "https://github.com/Markuff1/MyRunner",
  },
  {
    title: "WWE Universe Tracker V3",
    description:
      "A full-stack platform built with React and Firebase for tracking WWE Universe Mode content, including champions, shows, title histories, and storylines. Integrated login, protected routing, and real-time user data updates with expansion toward AI chatbot support.",
    bullets: [
      "Developed a TypeScript-based interface for managing rosters, matches, and events with React and SCSS",
      "Built protected routes to enforce login requirements and prevent unauthorized access",
      "Integrated Firebase and PHP backend services for secure authentication and data persistence",
      "Designed and stored dynamic data such as title history and weekly show logs",
      "Began integrating a GPT-style chatbot to help new users interact with the system (in development)",
      "Practiced penetration testing methods and applied findings to strengthen login security",
      "Improved deployment workflow by setting up custom domain and routing via GitHub Pages"
    ],
    tech: ["React", "TypeScript", "Firebase", "PHP", "SCSS", "JavaScript", "VSCode"],
    image: WWEWrestleverseV3Image,
    link: "/projects/WWEWrestleverseV3",
    repo: "https://github.com/Markuff1/Wrestleverse2k25",
    site: "https://wweuniverse.app",
  },
  {
    title: "WWE Universe Tracker V2",
    description:
      "A static version of the WWE tracking platform built with HTML, CSS, and JavaScript. Served as an MVP to learn full deployment, domain setup, and backend login implementation using PHP.",
    bullets: [
      "Built layout and core features using HTML, CSS, and JavaScript",
      "Configured and connected a custom domain via Namecheap and GitHub Pages, including CNAME setup",
      "Implemented basic login and session management via PHP (now deprecated in favor of V3 backend)",
      "Integrated a feedback submission system using JavaScript and Google Docs for user issue reporting"
    ],
    tech: ["HTML", "CSS", "JavaScript", "PHP", "Google Docs", "GitHub Pages"],
    image: WWEWrestleverseV2Image,
    link: "/projects/WWEWrestleverseV2",
    repo: "https://github.com/Markuff1/WrestleVerse",
    site: "https://thewrestleverse.co.uk/",
  },
  {
    title: "2D Adventure Game",
    description:
      "A tile-based 2D pixel game built in Java using a custom rendering engine. Developed to improve my understanding of object-oriented programming, canvas rendering, and game mechanics.",
    bullets: [
      "Designed a modular game engine using Java and Eclipse IDE with tile-based rendering",
      "Implemented collision detection, inventory logic, and health systems for in-game entities",
      "Parsed map data from .txt files for easy expansion of levels and exploration zones",
      "Created a performance optimization system to only render player’s active view region",
      "Reinforced knowledge of OOP concepts like polymorphism and inheritance in entity design"
    ],
    tech: ["Java", "OOP", "Eclipse IDE"],
    image: JavaGame,
    link: "/projects/2d-adventure-game",
    repo: "",
    site: "",
  },
  {
    title: "Happy Birthday Quiz Website",
    description:
      "A lightweight celebratory quiz built in React with TypeScript, showcasing dynamic forms and third-party form submission. Created for a personalized gifting experience.",
    bullets: [
      "Built a responsive quiz flow with animated transitions using React and SCSS",
      "Integrated FormSpree to submit responses via email for real-time quiz results",
      "Focused on accessibility and responsive layout for all devices"
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
      "A professional, mobile-friendly portfolio site to showcase my work, skills, and resume. Built from scratch using React, SCSS, and Vite for blazing fast development and deployment.",
    bullets: [
      "Created modular project and experience cards to dynamically populate portfolio data",
      "Implemented file download button to access CV PDF with click-to-download UX",
      "Styled layout using SCSS with mobile-first breakpoints and component-based design",
      "Deployed via GitHub Pages using Vite for optimal performance and fast load times"
    ],
    tech: ["React", "TypeScript", "SCSS", "Vite", "File Download"],
    image: CVWebsite,
    link: "",
    repo: "https://github.com/yourusername/cv-portfolio",
    site: "https://markuff1.github.io/mark-cv/",
  },
  {
    title: "Image Resizer Tool",
    description:
      "A desktop utility written in Python to batch resize and compress large image files for web optimization. Created to streamline asset prep while developing other projects.",
    bullets: [
      "Used OpenCV to handle image resizing, quality compression, and format conversion",
      "Built an intuitive GUI using Tkinter with error handling and file selection dialogs",
      "Prevented upscaling to preserve image quality and support custom size constraints",
      "Enabled adjustable JPEG quality control and success/error popups for usability"
    ],
    tech: ["Python", "OpenCV", "Tkinter", "File Handling"],
    image: ImageResizer,
    link: "/projects/image-resizer",
    repo: "https://github.com/Markuff1/Image-Resizer",
    site: "",
  },
  {
    title: "Chess App with CPU Opponent",
    description:
      "A web-based chess game where users can compete against a basic AI. Developed to learn about board state management, chess logic, and interactive UIs with chess.js.",
    bullets: [
      "Built AI move logic using chess.js to execute legal or capturing moves based on game state",
      "Integrated React Chessboard for piece interaction, animations, and move previews",
      "Implemented game-over detection for checkmate, stalemate, and draw conditions",
      "Added match restart via both button and Enter key keyboard integration",
      "Managed board state and event logic using React hooks and custom handlers"
    ],
    tech: ["React", "TypeScript", "JavaScript", "Chess.js", "React Chessboard"],
    image: ChessGame,
    link: "/projects/chess-app",
    repo: "https://github.com/Markuff1/chess-game",
    site: ""
  }
];

  return (
    <section id="Projects" className="Projects-container">
      <h1 className="Projects-title">-- PROJECTS --</h1>
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