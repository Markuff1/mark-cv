import Header from "./Header.tsx";
import "./Home.scss"
import AboutMe from "./Subpages/AboutMe.tsx";
import Experience from "./Subpages/Experience.tsx";
import Projects from "./Subpages/Projects.tsx";

function Home() {
  return (
    <div className="Homebackground">
      <Header />
      <AboutMe/>
      <Experience/>
      <Projects/>
    </div>
  );
}

export default Home;