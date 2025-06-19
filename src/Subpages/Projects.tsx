import "./Projects.scss";
import WWEWrestleverseV3Image from "../Subpages/ProjectImages/WWEWrestleverse.png";
import WWEWrestleverseV2Image from "../Subpages/ProjectImages/WWEWrestleverseHTML.png";
import JavaGame from "../Subpages/ProjectImages/JavaGame.png"
import HarryBDayPage from "../Subpages/ProjectImages/BirthdayWebsite.png"
import CVWebsite from "../Subpages/ProjectImages/CVWebsite.png"
import ImageResizer from "../Subpages/ProjectImages/ImageResizer.png"
import ChessGame from "../Subpages/ProjectImages/ChessGame.png"

function Projects() {
  const projectList = [
    {
      title: "WWE Universe Tracker V3",
      description:
        "The 3rd Interaction full-stack web app built using React.TS to manage and track elements of WWE Universe Mode including Champions, Rosters, Shows, and Storylines. Combined my passion for WWE with coding to improve both front-end and back-end development skills.",
      bullets: [
        "Developed using React, TypeScript, SCSS, and JavaScript for a responsive UI",
        "Built Protected Routes so that users can't bypass the login page",
        "Started Building an AI ChatBot and I am currently training that AI chatbot so that It can answer questions about my Website for new users but this is stil in Developement and Hasn't been tested and push to Live",
        "Used Firebase and PHP for secure user authentication and data storage",
        "Implemented features like title histories, roster management, and weekly show tracking",
        "Built a login verification system to manage user access",
        "Gained experience in full-stack development and real-time database interactions",
        "Relearned how to deploy websites using Github Pages as it is a different process with a React.ts Website",
        "This is also the first project, I started doing some Penetration testing with, which is what made me develope the Login system and Protected Routes but I'm still learning and Have got lots more to add"
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
        "The was the 2nd Interation of my Wrestleverse Website which I made using HTML, CSS and JavaScript however there were noticeable problems with the Loading of Images and bugs with Login so moved to V3 using React",
      bullets: [
        "Developed using HTML, CSS, Javascript",
        "Learnt to use Custom Domain Names, How to buy them using NameCheap, how to connect them and Understanding what a domain is, what a CName is and How to clean up the URL as well as how to deploy these sites on Github pages",
        "Used PHP for the Login and Verification of Login however this has since stopped working as the website is quite old now that I've moved on the 3rd version",
        "Created a Feedback page that links directly to a google doc using Javascript for improvement requests and bugs"
      ],
      tech: ["HTML","CSS","JavaScript","PHP","Google Doc Intergration","Github Pages"],
      image: WWEWrestleverseV2Image,
      link: "/projects/WWEWrestleverseV2",
      repo: "https://github.com/Markuff1/WrestleVerse",
      site: "https://thewrestleverse.co.uk/",
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
        "Integrated FormSpee to send results of the quiz to a database and when I result is recieved, I will get an Email",
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
        "Not the Flashest UI however this is a Tool I built when building other Projects as alot of the images I was creating and using had massive file sizes so needed a quick program to losslessly compress them",
      bullets: [
      "Used Python with OpenCV to resize and compress images",
      "Built a GUI using Tkinter for intuitive user interaction",
      "Added file dialog support for selecting input/output paths",
      "Built on my College Knowledge of Image compression",
      "Enabled JPEG quality control and custom max dimensions",
      "Prevented upscaling to preserve original image quality",
      "Displayed success/error messages using message boxes"
    ],
      tech: ["Python", "Image Uploader", "File Handling"],
      image: ImageResizer,
      link: "/projects/image-resizer",
      repo: "https://github.com/Markuff1/Image-Resizer",
      site: "",
    },
    {
    "title": "Chess App with CPU Opponent",
    "description": 
      "An interactive chess game built with React where users can play against a simple AI opponent. The AI performs valid moves, including capturing pieces, while the app validates player moves, detects game-over conditions such as checkmate and stalemate, and allows game restarts.",
    "bullets": [
      "Developed AI that selects random or capture moves to challenge the player",
      "Implemented full move validation and game state tracking using chess.js",
      "Provided user interface with React Chessboard for seamless interaction",
      "Handled game over scenarios including checkmate, stalemate, draws, and insufficient material",
      "Enabled game restart functionality for repeated play sessions Using either the button or I also added keyboard integration so that just the enterkey will restart the match"
    ],
    "tech": ["React", "TypeScript", "JavaScript", "Chess.js", "React Chessboard"],
    "image": ChessGame,
    "link": "/projects/chess-app",
    "repo": "https://github.com/Markuff1/chess-game",
    "site": ""
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